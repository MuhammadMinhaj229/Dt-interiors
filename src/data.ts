// Premium dataset for DT Interiors

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  beforeImg: string;
  afterImg: string;
  fallbackImg?: string;
  description: string;
  beforeDesc: string;
  afterDesc: string;
  materials: string[];
  timeline: string;
  costRange: string;
  clientName: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  img: string;
  specifications: string[];
}

export interface WhyFeature {
  title: string;
  description: string;
}

export interface JourneyStep {
  number: number;
  title: string;
  description: string;
}

export interface MaterialItem {
  name: string;
  category: string;
  origin: string;
  finish: string;
  description: string;
  img: string;
}

export interface Testimonial {
  name: string;
  role: string;
  project: string;
  text: string;
  rating: number;
  img: string;
  source: "Google Reviews" | "Verified Client";
}

export const SIGNATURE_PROJECTS: Project[] = [
  {
    id: "luxury-villa",
    title: "The Hanamkonda Estate",
    category: "Luxury Villa",
    location: "Hunter Road, Warangal",
    beforeImg: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
    description: "A spacious and comfortable 3-story family home designed for family gatherings and relaxing living. Features warm ceiling lights, smooth marble floors, and automatic lights.",
    beforeDesc: "A dark house with poor lighting, outdated electrical layouts, and cramped room partitions.",
    afterDesc: "A bright, open-plan home with soft ambient lights, natural marble materials, and excellent ventilation.",
    materials: ["Premium Italian Marble", "Natural Oak Wood Panels", "Rust-Free Dark Steel Trims", "Warm Warm-White LEDs"],
    timeline: "14 Weeks",
    costRange: "₹25,00,000 - ₹35,00,000",
    clientName: "Dr. K. Raghavendra, Chief Cardiologist"
  },
  {
    id: "modern-kitchen",
    title: "Gold-Line Modular Kitchen",
    category: "Premium Kitchen",
    location: "Waddepally, Warangal",
    beforeImg: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop",
    description: "A clean, modern kitchen with finger-print resistant cabinets, smooth-closing silent drawers, soft under-cabinet lights, and a beautiful black quartz counter.",
    beforeDesc: "Traditional concrete platform kitchen with very little storage, poor air flow, and water-damaged wooden shelves.",
    afterDesc: "A smart, easy-to-use kitchen with plenty of organized drawers, built-in appliance shelves, and scratch-resistant counters.",
    materials: ["Matte Acrylic Cabinets", "Durable Black Quartzite", "Smooth Silent Lifters", "Brushed Brass Handles"],
    timeline: "4 Weeks",
    costRange: "₹8,50,000 - ₹12,00,000",
    clientName: "Smt. Shailaja Reddy, Business Director"
  },
  {
    id: "luxury-apartment",
    title: "The Centenary Residence",
    category: "Luxury Apartment",
    location: "Naimnagar, Hanamkonda",
    beforeImg: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1200&auto=format&fit=crop",
    description: "A complete redesign of a standard apartment into a warm, comfortable home. Features cozy minimal furniture, beautiful fluted wooden walls, and a elegant kitchen counter.",
    beforeDesc: "Plain white walls, old tile floors, messy hanging wires, and small, outdated closets.",
    afterDesc: "A cozy, quiet home with a built-in TV console, comfortable quiet bedrooms, and simple modern bathroom cabinets.",
    materials: ["White Oak Woodwork", "Polished Black Marble", "Sound-Absorbing Wood Panels", "Eye-Friendly Warm Lights"],
    timeline: "8 Weeks",
    costRange: "₹14,00,000 - ₹18,00,000",
    clientName: "Sri Anand G., Senior Tech Architect"
  },
  {
    id: "commercial-office",
    title: "Telangana Tech Hub",
    category: "Office Space",
    location: "Adalat Road, Hanamkonda",
    beforeImg: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop",
    description: "A quiet, modern office designed for focus and collaboration. Features private work desks, glass meeting rooms, and decorative green ceiling plants.",
    beforeDesc: "Dark wooden office dividers, flickering yellow tube lights, and cramped, stressful desks.",
    afterDesc: "A bright, open workspace with comfortable chairs, plenty of natural light, and relaxed breakout areas.",
    materials: ["Sound-Proof Glass", "Natural Greenery Panels", "Rust-Free Slate Aluminum", "Heavy-Duty Carpet Tiles"],
    timeline: "10 Weeks",
    costRange: "₹20,00,000 - ₹28,00,000",
    clientName: "V-Connect Solutions Private Limited"
  },
  {
    id: "bespoke-wardrobe",
    title: "Dual-Tone Sliding Closet with Backlit Mirror",
    category: "Bespoke Wardrobes",
    location: "Kishanpura, Hanamkonda",
    beforeImg: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
    afterImg: "/projects/bespoke-wardrobe.jpg",
    fallbackImg: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop",
    description: "A dual-tone high-gloss white and charcoal sliding-door wardrobe featuring modern overhead loft storage. Includes a built-in full-height dressing mirror integrated with perimeter-backlit LED lighting and sleek open floating displays.",
    beforeDesc: "Cluttered bedroom wall space with outdated standard hinged doors and poor spatial planning.",
    afterDesc: "A clean, spacious luxury wardrobe configuration that maximizes vertical height and adds cinematic room depth with LED lighting elements.",
    materials: ["High-Gloss Acrylic Laminates", "Soft-Close Sliding Door Channels", "Perimeter-backlit LED Mirror", "Termite-Free Marine Plywood"],
    timeline: "3 Weeks",
    costRange: "₹4,50,000 - ₹6,50,000",
    clientName: "Dr. Srinivas Rao, Senior Professor"
  },
  {
    id: "teak-glass-closet",
    title: "Teak Wood Glass Closet & Window Reading Bay",
    category: "Bespoke Wardrobes",
    location: "Kishanpura, Hanamkonda",
    beforeImg: "https://images.unsplash.com/photo-1558882224-cca166733360?q=80&w=800&auto=format&fit=crop",
    afterImg: "/projects/teak-glass-closet.jpg",
    fallbackImg: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1200&auto=format&fit=crop",
    description: "Bespoke wooden glass-door wardrobes equipped with inner warm LED lighting, rich natural teak framing, floating display shelves, and a cozy custom window reading bench with integrated under-seat storage.",
    beforeDesc: "Empty bedroom corner with a plain window and no storage, leading to clutter and unused space.",
    afterDesc: "A highly-functional bedroom system incorporating visual wardrobe storage, extensive warm backlighting, and a comfortable, dedicated lounging spot.",
    materials: ["Clear Glass Doors with Gold Bezels", "Warm LED Strip Illuminators", "Burmese Teak Panels", "Soft Teal Fabric Cushioning"],
    timeline: "4 Weeks",
    costRange: "₹5,20,000 - ₹7,00,000",
    clientName: "Smt. Kamala Devi, Renowned Educationist"
  },
  {
    id: "sacred-lotus-pooja-partition",
    title: "Sacred Lotus Pooja Partition Screen",
    category: "Luxury Villa",
    location: "Hunter Road, Warangal",
    beforeImg: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    afterImg: "/projects/sacred-lotus-pooja-partition.jpg",
    fallbackImg: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1200&auto=format&fit=crop",
    description: "An elegant custom-engineered living room partition screen combining white geometric CNC-cut jaali panels, rich teak pillars, and backlit doors featuring gold metal Lotus carvings representing the sacred pooja sanctuary.",
    beforeDesc: "A plain foyer leading directly into the main living room with zero visual division or privacy.",
    afterDesc: "A breathtaking architectural focal point that provides privacy, structures the foyer entry, and integrates sacred traditional motifs into a modern layout.",
    materials: ["Precision White CNC Jaali Panels", "Gold-Plated Lotus Mandala Carvings", "Solid Burmese Teakwood", "Backlit Warm Acrylic Sheets"],
    timeline: "5 Weeks",
    costRange: "₹6,80,000 - ₹9,50,000",
    clientName: "Sri G. Venkat Rao, High Court Advocate"
  },
  {
    id: "geometric-organic-ceiling",
    title: "Geometric LED & Organic CNC False Ceiling",
    category: "Luxury Apartment",
    location: "Naimnagar, Hanamkonda",
    beforeImg: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop",
    afterImg: "/projects/geometric-organic-ceiling.jpg",
    fallbackImg: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
    description: "A custom layered luxury false ceiling featuring geometric white LED profile diffusers, deep indirect warm coves, and a prominent central dark wood panel with laser-cut leafy organic CNC patterns.",
    beforeDesc: "A simple concrete slab with exposed conduit pipes and basic, harsh fluorescent tubes.",
    afterDesc: "A layered architectural masterpiece that combines soft, non-glare atmospheric backlighting with custom organic wood details for grand volume.",
    materials: ["Gyproc Moisture-Resistant Boards", "Sleek Aluminum Profile Channels", "Cove Warm White LEDs (3000K)", "Premium Dark CNC Wood Panels"],
    timeline: "3 Weeks",
    costRange: "₹3,50,000 - ₹5,00,000",
    clientName: "Dr. Arundhati J., Lead Neurosurgeon"
  }
];

export const LUXURY_SERVICES: Service[] = [
  {
    id: "architecture-design",
    title: "Architecture Design",
    description: "Floor plans and house layouts that make sure your home is structurally strong, airy, and beautiful.",
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop",
    specifications: ["Custom house fronts (elevations)", "Structural strength planning", "Smooth indoor-outdoor walk pathways", "Selection of sturdy materials"]
  },
  {
    id: "interior-design",
    title: "Interior Design",
    description: "Full room styling and decoration for your home, from choosing the right furniture to finding the perfect colors.",
    img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop",
    specifications: ["Smart room layout plans", "Beautiful wall finishes", "Furniture selection and layout", "Comforting color schemes"]
  },
  {
    id: "3d-visualization",
    title: "3D Visualization & Rendering",
    description: "Realistic 3D pictures of your design, letting you walk through your future rooms before any building work starts.",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
    specifications: ["High-clearance 3D photos", "Video walk-throughs of rooms", "Realistic preview of materials", "Lighting previews for night & day"]
  },
  {
    id: "space-planning",
    title: "2D Space Planning",
    description: "Detailed 2D floor maps designed to maximize your usable room space and make daily walking easy and smooth.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
    specifications: ["Smart space dividing", "Comfortable walking clearance checks", "Furniture position layouts", "Detailed wall drawings"]
  },
  {
    id: "modular-kitchen",
    title: "Modular Kitchen",
    description: "Water-proof and long-lasting kitchen cabinets with smooth, silent drawers and beautiful, easy-to-clean stone counters.",
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop",
    specifications: ["Water-proof wooden frames", "Silent self-closing drawers", "Hidden drawers for daily appliances", "Fingerprint-proof cabinet finishes"]
  },
  {
    id: "modular-wardrobe",
    title: "Modular Wardrobe",
    description: "Custom-made bedroom closets and wardrobes with glass doors, built-in lights, and custom drawers for your clothes and accessories.",
    img: "https://images.unsplash.com/photo-1558882224-cca166733360?q=80&w=800&auto=format&fit=crop",
    specifications: ["Full-height elegant wardrobes", "Automatic cabinet lights", "Soft-closing cabinet doors", "Premium clean finishes"]
  },
  {
    id: "turnkey-projects",
    title: "Renovation & Turnkey Projects",
    description: "End-to-end transformation of your old or bare house into a finished, ready-to-move-in home without any stress.",
    img: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=800&auto=format&fit=crop",
    specifications: ["Complete house check-ups", "Removing old partitions", "Single team managing everything", "Strict delivery on time"]
  },
  {
    id: "bedroom-interiors",
    title: "Bedroom Interiors",
    description: "Quiet, peaceful master bedrooms designed with soft headboards, cozy lighting, and comfortable bedside tables.",
    img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop",
    specifications: ["Soft, sound-dampening walls", "Custom upholstered headboards", "Warm cozy ambient lights", "Handmade bedside drawers"]
  },
  {
    id: "modular-semi-modular",
    title: "Modular & Semi-Modular",
    description: "Flexible, high-precision storage cabinets and shelves built in our clean factory and installed perfectly in your home.",
    img: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=800&auto=format&fit=crop",
    specifications: ["Clean, factory-cut edges", "Adjustable shelf heights", "Wide choice of colorful laminates", "Durable moisture-proof wood"]
  },
  {
    id: "commercial-interiors",
    title: "Office & Commercial Interiors",
    description: "Beautiful offices, meeting rooms, and retail spaces designed to make work comfortable and welcome your customers.",
    img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop",
    specifications: ["Office branding & paint schemes", "Glass divider partitions", "Comfortable desk and chair setups", "Integrated smart meeting rooms"]
  },
  {
    id: "partition-vanity",
    title: "Partition & Vanity",
    description: "Elegant room partitions and moisture-proof bathroom washbasin counters made from sturdy, elegant materials.",
    img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=800&auto=format&fit=crop",
    specifications: ["Fluted glass room dividers", "Water-resistant washbasin counters", "Bright LED bathroom mirrors", "Sturdy stone counter plates"]
  },
  {
    id: "false-ceiling",
    title: "False Ceiling & Lighting",
    description: "Beautiful ceiling plaster layouts with warm, hidden coves and energy-saving spotlights that make rooms feel tall and bright.",
    img: "https://images.unsplash.com/photo-1502005229762-fc1b2b812ca5?q=80&w=800&auto=format&fit=crop",
    specifications: ["High-durability plaster boards", "Modern spotlight tracks", "Dimmer-friendly warm lights", "Perfect joint finish with no cracks"]
  },
  {
    id: "wall-paneling",
    title: "Wall Paneling",
    description: "Textured wooden strips, stone backdrops, and soft felt boards that add warmth and beauty to plain walls.",
    img: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=800&auto=format&fit=crop",
    specifications: ["Premium wooden wall strips", "Smooth, seamless installations", "Cozy noise-reducing panels", "Decorative metallic outlines"]
  },
  {
    id: "living-room",
    title: "Living Room & TV Units",
    description: "Beautifully styled living rooms with floating TV consoles, hidden wires, and beautiful background wall patterns.",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
    specifications: ["Hidden wire channels", "Wood and stone TV backdrops", "Custom-made TV cabinets", "Integrated home speakers placement"]
  }
];

export const WHY_DT_INTERIORS: WhyFeature[] = [
  {
    title: "Designs Just For You",
    description: "We don't use boring templates. Every layout, corner, and material is selected to match your daily life and family style."
  },
  {
    title: "High-Quality Finishes",
    description: "We source sturdy, scratch-proof, and heat-resistant materials directly so your home stays beautiful for years."
  },
  {
    title: "Stress-Free Installation",
    description: "No dealing with different workers or local contractors. Our friendly team handles everything from delivery to setup."
  },
  {
    title: "Honest & Clear Pricing",
    description: "We provide detailed, item-by-item price quotes. No hidden costs, no surprise bills, and absolute honesty from day one."
  },
  {
    title: "Your Own Designer",
    description: "You will work with one friendly designer who will listen to your ideas and guide you from the first sketch to the final day."
  },
  {
    title: "On-Time Delivery",
    description: "We value your time. We promise to complete your home on or before the agreed date, with no unnecessary delays."
  },
  {
    title: "Long-Term Guarantee",
    description: "Get complete peace of mind. All our cabinets, hinges, and wooden works are backed by a reliable 5 to 10-year warranty."
  }
];

export const DESIGN_JOURNEY: JourneyStep[] = [
  {
    number: 1,
    title: "Complimentary Consultation",
    description: "An open discovery call or physical studio meetup where we understand your style wishlist, room count, structural scope, and targeted budget tier."
  },
  {
    number: 2,
    title: "Precision Laser Site Visit",
    description: "Our engineering team visits your site with sub-millimeter laser scanners to map precise walls, natural light pathways, ceiling heights, and pipe outlets."
  },
  {
    number: 3,
    title: "Mood Board & Space Layout",
    description: "We present initial 2D furniture layouts and tactile mood boards matching your color palette, establishing material pairs (e.g., Brushed Brass & Warm Oak)."
  },
  {
    number: 4,
    title: "Photo-Realistic 3D Walkthrough",
    description: "Experience your future home before laying a single brick. We build highly immersive, photorealistic 3D renders calibrating exact lighting angles."
  },
  {
    number: 5,
    title: "Guided Material Selection",
    description: "We walk you through our premium samples of quartzites, premium laminates, PU paints, and acoustic panels to pick physical surfaces."
  },
  {
    number: 6,
    title: "Precision Modular Fabrication",
    description: "Cabinets, shutters, and wood frames are precision-machined in a dust-free state-of-the-art factory to prevent on-site sawing noise and alignment issues."
  },
  {
    number: 7,
    title: "Artisanal Site Assembly",
    description: "Our certified technicians assemble, wire, and align panels, coves, handles, and accessories on-site under strict safety and cleanliness rules."
  },
  {
    number: 8,
    title: "The Grand Reveal & Handover",
    description: "The space is professionally cleaned, styled, and delivered. We host a key-handover celebration with your warranty certificate documentation."
  }
];

export const MATERIAL_GALLERY: MaterialItem[] = [
  {
    name: "Smoked American Oak",
    category: "Hardwoods & Veneers",
    origin: "FSC Certified European Import",
    finish: "Ultra-Matte Natural Oil",
    description: "Deep, carbonized rich wood tone with active natural grains, ideal for luxury acoustic panels and ceiling framing.",
    img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Arabescato Gold Marble",
    category: "Natural Stone Slabs",
    origin: "Apuan Alps, Italy",
    finish: "Book-matched High-Gloss Polished",
    description: "Dramatically veined classic white marble with unique charcoal and subtle gold thread ribbons, perfect for TV feature panels.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Fenix NTM Obsidian Black",
    category: "Nano Tech Polymers",
    origin: "Arpa Industriale, Italy",
    finish: "Super-Matte Soft-Touch, Anti-Fingerprint",
    description: "Next-gen smart material with thermal micro-scratch healing. Perfect for luxury modular kitchen cabinets and wardrobe shutters.",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Brushed Champagne Gold PVD",
    category: "Metallic Accents",
    origin: "Bespoke Powder-Coated Import",
    finish: "Satin Anodized Brushed Texture",
    description: "Highly durable physical vapor deposition steel trim. Reflects light beautifully without distracting glare.",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Belgian Textured Linen",
    category: "Wallcoverings & Textiles",
    origin: "Antwerp, Belgium",
    finish: "Coarse Textured Matte Fabric",
    description: "Elegant, acoustically dampened organic linen wallpaper that adds sophisticated physical depth and warmth to master bedroom backdrops.",
    img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Human-Centric Tunable LED",
    category: "Lighting Systems",
    origin: "Cree / Philips Architectural",
    finish: "Low-glare High CRI (95+) COB Lenses",
    description: "Integrated LED engines that shift seamlessly from 2700K (Golden Twilight Comfort) to 4000K (Natural Luminous Focus).",
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=400&auto=format&fit=crop"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Dr. K. Raghavendra",
    role: "Chief Cardiologist",
    project: "Hanamkonda Estate Private Residency",
    text: "DT Interiors completely reimagined our 3-story villa. From the breathtaking Italian book-matched marble in the living room to the dust-free modular wardrobes, the execution was flawless. Their commitment to timelines is unmatched in Telangana.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=300&auto=format&fit=crop",
    source: "Google Reviews"
  },
  {
    name: "Ahmed OR",
    role: "Homeowner",
    project: "Premium Modern Wardrobe Setup",
    text: "Nice 👍 work and extremely good response from the team at DT Interiors. They are highly professional, polite, and deliver exceptional finishing.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    source: "Google Reviews"
  },
  {
    name: "Mohd Sadiq Pasha",
    role: "Villa Client",
    project: "Luxury Turnkey Interior Design",
    text: "Good quality company for interior work in Telangana. Their factory-cut wooden boards and premium accessories are highly durable and beautiful.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    source: "Google Reviews"
  },
  {
    name: "Odipil Rayees Ahmed",
    role: "Residence Owner",
    project: "Bespoke Modular Kitchen",
    text: "Good quality work and without doubt the best interior designer in Warangal. Highly creative and responsive layout options.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    source: "Google Reviews"
  },
  {
    name: "Smt. Shailaja Reddy",
    role: "Business Director",
    project: "Gold-Line Waddepally Kitchen",
    text: "What we loved most was the complete transparency. The pricing list matched the factory-fabricated materials perfectly. Our modern matte-black modular kitchen is the talk of our family circles. Strongly recommended!",
    rating: 5,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop",
    source: "Google Reviews"
  }
];
