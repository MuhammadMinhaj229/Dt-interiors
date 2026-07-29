import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

let aiClient: GoogleGenAI | null = null;

function getGenAI(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY environment variable is required. Please set it in Settings > Secrets.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// API routes
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// AI Style Quiz Endpoint
app.post("/api/gemini/analyze-style", async (req, res) => {
  try {
    const { answers } = req.body;
    if (!answers) {
      return res.status(400).json({ error: "Answers are required" });
    }

    const prompt = `Analyze the following interior design quiz answers and generate a highly personalized, luxury-oriented interior design persona profile.
Quiz Answers:
${JSON.stringify(answers, null, 2)}

Return a JSON object containing:
1. persona: (string) A creative, high-end name for their style (e.g., "Warm Architectural Minimalist", "Poliform Modernist", "Minotti Luxe Classicist").
2. statement: (string) A beautiful editorial narrative (1-2 sentences) summarizing their design philosophy.
3. characteristics: (array of strings) 3-4 defining rules of their aesthetic.
4. colorPalette: (array of objects with 'name' and 'hex') 4 matching colors for a luxury color palette.
5. materialBoard: (array of strings) 4-5 premium materials that fit their style perfectly.
6. lightingAdvice: (string) Professional lighting guidance for their style.
7. suggestions: (array of strings) 3 curated design suggestions.

Strictly return valid JSON only. Do not wrap in markdown codeblocks.`;

    const response = await getGenAI().models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const responseText = response.text || "{}";
    const cleanedJson = responseText.trim().replace(/^```json/, "").replace(/```$/, "").trim();
    res.json(JSON.parse(cleanedJson));
  } catch (error: any) {
    console.error("Style Quiz API Error:", error);
    res.status(500).json({ error: error.message || "Failed to analyze style profile." });
  }
});

// AI Cost Estimator Endpoint
app.post("/api/gemini/estimate-cost", async (req, res) => {
  try {
    const { roomType, dimensions, materialTier, specialAdditions, floorPlanText } = req.body;

    const prompt = `Generate a realistic luxury interior design cost estimation report for a project located in Warangal/Telangana, India.
Project Details:
- Room Type: ${roomType}
- Dimensions: ${JSON.stringify(dimensions)} (Length x Width x Height in feet)
- Material Tier: ${materialTier} (e.g., "Standard Premium", "Luxury Import", "Elite Italian Turnkey")
- Special Additions: ${JSON.stringify(specialAdditions)}
- Additional Details / Floor Plan notes: ${floorPlanText || "None specified"}

Estimate realistic, high-quality, professional pricing in Indian Rupees (INR).
Return a JSON object containing:
1. totalEstimateRange: { min: number, max: number, formatted: string } (Realistic budget range in INR)
2. itemizedBreakdown: array of objects with 'item' (string), 'description' (string), 'costINR' (number), and 'formattedCost' (string). Include design fee, premium carpentry/modular works, false ceiling, lighting/electrical, painting, wall panelling, and installation.
3. materialInclusions: array of strings describing the premium materials included in this specific budget tier.
4. projectTimeline: string (estimated completion time)
5. costOptimizationTips: array of strings offering 3 expert guidelines to optimize their design project.

Strictly return valid JSON only. Do not wrap in markdown codeblocks.`;

    const response = await getGenAI().models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const responseText = response.text || "{}";
    const cleanedJson = responseText.trim().replace(/^```json/, "").replace(/```$/, "").trim();
    res.json(JSON.parse(cleanedJson));
  } catch (error: any) {
    console.error("Cost Estimator API Error:", error);
    res.status(500).json({ error: error.message || "Failed to estimate project cost." });
  }
});

// Configure static assets/Vite middleware when not running on Vercel serverless
if (!process.env.VERCEL) {
  async function configureViteAndStatic() {
    if (process.env.NODE_ENV !== "production") {
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: "spa",
      });
      app.use(vite.middlewares);
    } else {
      const distPath = path.join(process.cwd(), 'dist');
      app.use(express.static(distPath));
      app.get('*', (req, res) => {
        res.sendFile(path.join(distPath, 'index.html'));
      });
    }
  }
  configureViteAndStatic();

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

export default app;

