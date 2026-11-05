// Central product data used by the Products listing page and the
// individual product detail pages (app/products/[slug]/page.tsx).

export type SpecTable = {
  /** First column header (row label header), e.g. "Index" */
  rowHeader: string;
  /** Column headers for each value column, e.g. ["Nano Zirconia Beads", "High-purity Zirconia Beads"] */
  columns: string[];
  rows: { label: string; values: string[] }[];
};

export type BallDiameterRow = {
  particleSize: string;
  medianDiameter: string;
  sphereDiameterRange: string;
  maxDistribution: string;
  maxDistributionRatio: string;
  outOfToleranceRate: string;
};

export type ProcessCharacteristics = {
  title: string;
  points: string[];
};

export type ProductDetail = {
  slug: string;
  category: string;
  categoryHref: string;
  name: string;
  subtitle?: string;
  heroImg: string;
  description: string;
  particleSizes?: { label: string; range: string }[];
  techTable?: SpecTable;
  processCharacteristics?: ProcessCharacteristics[];
  ballDiameterSpec?: BallDiameterRow[];
  applications?: string[];
  representativeProducts?: string[];
  color?: string;
};

// Shared ball-diameter specification table (same reference data applies to
// both zirconia and silicon nitride beads per the grinding media handbook).
const sharedBallDiameterSpec: BallDiameterRow[] = [
  { particleSize: "0.1mm", medianDiameter: "0.105", sphereDiameterRange: "0.08–0.12", maxDistribution: "0.09–0.115", maxDistributionRatio: "> 50%", outOfToleranceRate: "< 0.7%" },
  { particleSize: "0.2mm", medianDiameter: "0.205", sphereDiameterRange: "0.18–0.23", maxDistribution: "0.185–0.22", maxDistributionRatio: "> 50%", outOfToleranceRate: "< 0.7%" },
  { particleSize: "0.3mm", medianDiameter: "0.31", sphereDiameterRange: "0.28–0.33", maxDistribution: "0.295–0.315", maxDistributionRatio: "> 55%", outOfToleranceRate: "< 0.6%" },
  { particleSize: "0.4mm", medianDiameter: "0.41", sphereDiameterRange: "0.37–0.43", maxDistribution: "0.39–0.42", maxDistributionRatio: "> 55%", outOfToleranceRate: "< 0.6%" },
  { particleSize: "0.5mm", medianDiameter: "0.5", sphereDiameterRange: "0.47–0.53", maxDistribution: "0.48–0.51", maxDistributionRatio: "> 55%", outOfToleranceRate: "< 0.6%" },
  { particleSize: "0.6mm–0.8mm", medianDiameter: "0.6–0.7 / 0.7–0.8", sphereDiameterRange: "0.59–0.82", maxDistribution: "0.58–0.82", maxDistributionRatio: "> 60%", outOfToleranceRate: "< 0.5%" },
  { particleSize: "0.8mm–1.0mm", medianDiameter: "0.8–0.9 / 0.9–1.0", sphereDiameterRange: "0.8–1.0", maxDistribution: "0.79–1.02", maxDistributionRatio: "> 60%", outOfToleranceRate: "< 0.5%" },
  { particleSize: "1.0mm–1.2mm", medianDiameter: "1.0–1.1 / 1.1–1.2", sphereDiameterRange: "1.0–1.2", maxDistribution: "0.99–1.22", maxDistributionRatio: "> 60%", outOfToleranceRate: "< 0.5%" },
  { particleSize: "1.2mm–1.4mm", medianDiameter: "1.2–1.3 / 1.3–1.4", sphereDiameterRange: "1.2–1.4", maxDistribution: "1.19–1.42", maxDistributionRatio: "> 60%", outOfToleranceRate: "< 0.5%" },
  { particleSize: "1.4mm–1.6mm", medianDiameter: "1.4–1.5 / 1.5–1.6", sphereDiameterRange: "1.4–1.6", maxDistribution: "1.38–1.62", maxDistributionRatio: "> 60%", outOfToleranceRate: "< 0.5%" },
  { particleSize: "1.6mm–1.8mm", medianDiameter: "1.6–1.7 / 1.7–1.8", sphereDiameterRange: "1.6–1.8", maxDistribution: "1.58–1.82", maxDistributionRatio: "> 60%", outOfToleranceRate: "< 0.5%" },
  { particleSize: "1.8mm–2.0mm", medianDiameter: "1.8–1.9 / 1.9–2.0", sphereDiameterRange: "1.8–2.0", maxDistribution: "1.77–2.03", maxDistributionRatio: "> 60%", outOfToleranceRate: "< 0.5%" },
];

export const products: ProductDetail[] = [
  // ── Ceramic Grinding Media ────────────────────────────────────────────
  {
    slug: "zirconia-beads",
    category: "Ceramic Grinding Media",
    categoryHref: "/products#grinding-media",
    name: "Zirconia Beads",
    subtitle: "ZR95 Series",
    heroImg: "/images/ceramics.jpg",
    description:
      "Ultra-fine crystallite structure, high density, uniform particle size and smooth surface. Non-standard grinding media can be customised according to customer requirements with good wear resistance and high strength, effectively reducing grinding process cost.",
    particleSizes: [
      { label: "ZR95 Nano Zirconia Beads", range: "0.05mm- 2.00mm" },
      { label: "ZR95 High-purity Zirconia Beads", range: "0.30mm- 5.00mm" },
    ],
    techTable: {
      rowHeader: "Index",
      columns: ["Nano Zirconia Beads", "High-purity Zirconia Beads"],
      rows: [
        { label: "Zirconia Content", values: ["94.5±0.2 (%)", "94.5±0.5 (%)"] },
        { label: "Density", values: ["≥6.03g/cm³", "≥6.0g/cm³"] },
        { label: "Packing Density", values: ["≥3.7g/cm³", "≥3.6g/cm³"] },
        { label: "Average Crushing Strength", values: ["≥10Kgf", "≥9Kgf"] },
        { label: "Sphericity", values: [">0.98Ds/Dl", ">0.95Ds/Dl"] },
        { label: "Size Deviation Rate", values: ["≈0.5‰", "≈1‰"] },
        { label: "Surface Finish", values: ["Sa=20~30nm", "Sa=45~65nm"] },
        { label: "Vickers Hardness", values: ["≥1300HV", "≥1250HV"] },
      ],
    },
    processCharacteristics: [
      {
        title: "ZR95 Nano Zirconia Beads",
        points: [
          "Unique extrusion moulding process gives a uniform, compact green body.",
          "Made of hydrothermal nano raw materials — smooth, fine surface and excellent wear resistance via low-temperature sintering.",
          "Three-level selection and two-level screening ensures sphericity and particle size concentration.",
          "Ultra-high-speed pre-grinding process ensures no beads break during use.",
          "Suitable for ultra-fine dispersion, including under high-viscosity conditions.",
        ],
      },
      {
        title: "High-purity Zirconia Beads",
        points: [
          "Made of high-purity Y-TZP raw material — good wear resistance and strength.",
          "No broken beads during use.",
          "Good self-lubrication and sphericity — less wear to equipment.",
        ],
      },
    ],
    ballDiameterSpec: sharedBallDiameterSpec,
    applications: [
      "Lithium iron phosphate battery materials",
      "Silicon electrode materials",
      "Electronic & magnetic materials",
      "Carbon nanotubes & graphite",
      "Paints, inks & coatings",
      "Food, medical care & cosmetics",
      "Pharmaceutical & biochemical grinding",
      "Mineral ore processing",
      "Papermaking materials",
    ],
  },
  {
    slug: "silicon-nitride-beads",
    category: "Ceramic Grinding Media",
    categoryHref: "/products#grinding-media",
    name: "Silicon Nitride Beads",
    subtitle: "Ultra-Wear-Resistant Series",
    heroImg: "/images/silicon_nitride.png",
    description:
      "High-end grinding media with low density, low wear and high efficiency. Applicable across a wider range of grinding conditions with excellent cost performance — a premium alternative to zirconia beads.",
    particleSizes: [{ label: "Ultra-wear-resistant Silicon Nitride Beads", range: "0.10mm- 3.00mm" }],
    techTable: {
      rowHeader: "Index",
      columns: ["Silicon Nitride Beads"],
      rows: [
        { label: "Size Distribution", values: ["0.1mm – 3.0 mm"] },
        { label: "Average Crushing Strength", values: ["≥ 50 Kgf (Ø1.0 mm)"] },
        { label: "Density", values: ["≥ 3.2 g/cm³"] },
        { label: "Sphericity", values: ["> 0.97"] },
        { label: "Surface Self Abrasion", values: ["< 1.6 ppm/h"] },
        { label: "Internal Self Abrasion", values: ["< 1.5 ppm/h"] },
        { label: "Internal Porosity Rate", values: ["< 0.2%"] },
        { label: "Exceeding the Tolerance Rate", values: ["≈ 0.5‰"] },
      ],
    },
    processCharacteristics: [
      {
        title: "Process characteristics",
        points: [
          "Unique extrusion moulding process — uniform and dense green body.",
          "Vacuum sintering achieves density ≥ 3.2 g/cm³; wear resistance over 10× zirconia beads and nearly 20× high-purity zirconia beads.",
          "Higher actual linear velocity improves ultra-fine dispersion efficiency by more than 30%.",
          "Density is only ~53% of zirconia beads, reducing energy consumption and heat generation.",
          "Extremely low abrasion rate reduces frequency of adding/replacing grinding media.",
        ],
      },
    ],
    ballDiameterSpec: sharedBallDiameterSpec,
    applications: [
      "Silicon nitride powder & raw materials",
      "High-purity materials",
      "New energy & lithium battery materials",
      "Photovoltaic materials",
      "Biomedicine",
      "Semiconductors & electronic materials",
    ],
  },
  {
    slug: "alumina-ceramic-beads",
    category: "Ceramic Grinding Media",
    categoryHref: "/products#grinding-media",
    name: "Alumina Ceramic Beads",
    subtitle: "92% Alumina Series",
    description:
      "Manufactured from premium 92% alumina raw materials with high hardness and excellent wear resistance. A cost-effective grinding media for general industrial applications, offering strong resistance to corrosion, acids and alkalis, high impact strength and a low breakage rate. Suitable for both wet and dry grinding processes.",
    heroImg: "/images/alumina_ceramic_ball.jpg",
    color: "#F0F0EE",

    particleSizes: [
      { label: "92% Alumina Ceramic Beads", range: "1.00mm- 100.00mm" },
    ],

    techTable: {
      rowHeader: "Index",
      columns: ["Alumina Ceramic Balls"],
      rows: [
        { label: "Alumina Content (Al₂O₃)", values: ["≥92%"] },
        { label: "Density", values: ["≥3.60 g/cm³"] },
        { label: "Bulk Density", values: ["≥2.20 g/cm³"] },
        { label: "Water Absorption", values: ["≤0.01%"] },
        { label: "Mohs Hardness", values: ["9"] },
        { label: "Compressive Strength", values: ["≥2000 MPa"] },
        { label: "Sphericity", values: ["≥95%"] },
        { label: "Wear Loss", values: ["≤0.02%"] },
        { label: "Color", values: ["White"] },
      ],
    },

    processCharacteristics: [
      {
        title: "Product Process Characteristics",
        points: [
          "Manufactured from premium 92% alumina raw materials",
          "High hardness and excellent wear resistance",
          "Cost-effective grinding media for general industrial applications",
          "Excellent resistance to corrosion, acids, and alkalis",
          "High impact strength with low breakage rate",
          "Suitable for wet and dry grinding processes",
          "Available in precision sizes from Φ1 mm to Φ100 mm",
          "Long service life with low wear contamination",
          "Custom sizes and tolerance grades available upon request",
        ],
      },
    ],

    ballDiameterSpec: [
      { particleSize: "1 mm", medianDiameter: "1", sphereDiameterRange: "0.95 – 1.05", maxDistribution: "±0.05", maxDistributionRatio: "-", outOfToleranceRate: "-" },
      { particleSize: "2 mm", medianDiameter: "2", sphereDiameterRange: "1.95 – 2.05", maxDistribution: "±0.05", maxDistributionRatio: "-", outOfToleranceRate: "-" },
      { particleSize: "3 mm", medianDiameter: "3", sphereDiameterRange: "2.95 – 3.05", maxDistribution: "±0.05", maxDistributionRatio: "-", outOfToleranceRate: "-" },
      { particleSize: "5 mm", medianDiameter: "5", sphereDiameterRange: "4.95 – 5.05", maxDistribution: "±0.05", maxDistributionRatio: "-", outOfToleranceRate: "-" },
      { particleSize: "10 mm", medianDiameter: "10", sphereDiameterRange: "9.90 – 10.10", maxDistribution: "±0.10", maxDistributionRatio: "-", outOfToleranceRate: "-" },
      { particleSize: "15 mm", medianDiameter: "15", sphereDiameterRange: "14.90 – 15.10", maxDistribution: "±0.10", maxDistributionRatio: "-", outOfToleranceRate: "-" },
      { particleSize: "20 mm", medianDiameter: "20", sphereDiameterRange: "19.85 – 20.15", maxDistribution: "±0.15", maxDistributionRatio: "-", outOfToleranceRate: "-" },
      { particleSize: "25 mm", medianDiameter: "25", sphereDiameterRange: "24.80 – 25.20", maxDistribution: "±0.20", maxDistributionRatio: "-", outOfToleranceRate: "-" },
      { particleSize: "30 mm", medianDiameter: "30", sphereDiameterRange: "29.80 – 30.20", maxDistribution: "±0.20", maxDistributionRatio: "-", outOfToleranceRate: "-" },
      { particleSize: "40 mm", medianDiameter: "40", sphereDiameterRange: "39.75 – 40.25", maxDistribution: "±0.25", maxDistributionRatio: "-", outOfToleranceRate: "-" },
      { particleSize: "50 mm", medianDiameter: "50", sphereDiameterRange: "49.70 – 50.30", maxDistribution: "±0.30", maxDistributionRatio: "-", outOfToleranceRate: "-" },
      { particleSize: "60 mm", medianDiameter: "60", sphereDiameterRange: "59.70 – 60.30", maxDistribution: "±0.30", maxDistributionRatio: "-", outOfToleranceRate: "-" },
      { particleSize: "70 mm", medianDiameter: "70", sphereDiameterRange: "69.60 – 70.40", maxDistribution: "±0.40", maxDistributionRatio: "-", outOfToleranceRate: "-" },
      { particleSize: "80 mm", medianDiameter: "80", sphereDiameterRange: "79.50 – 80.50", maxDistribution: "±0.50", maxDistributionRatio: "-", outOfToleranceRate: "-" },
      { particleSize: "90 mm", medianDiameter: "90", sphereDiameterRange: "89.50 – 90.50", maxDistribution: "±0.50", maxDistributionRatio: "-", outOfToleranceRate: "-" },
      { particleSize: "100 mm", medianDiameter: "100", sphereDiameterRange: "99.50 – 100.50", maxDistribution: "±0.50", maxDistributionRatio: "-", outOfToleranceRate: "-" },
    ],

    applications: [
      "Ceramic and porcelain industries",
      "Ball mills and attrition mills",
      "Mining and mineral processing",
      "Paints, inks and pigments",
      "Cement and building materials",
      "Chemical processing",
      "Refractory materials",
      "Electronic ceramics",
      "Pharmaceutical and cosmetic industries",
      "Water treatment systems",
      "Laboratory grinding and sample preparation",
    ],
  },

  // ── Ceramic Parts ──────────────────────────────────────────────────────
  {
    slug: "a-zr-y8-series",
    category: "Ceramic Parts",
    categoryHref: "/products#ceramic-parts",
    name: "A-ZR (Y8 Series)",
    heroImg: "/images/ceramic_part.png",
    color: "#d4c49a",
    description:
      "A composite stabilised zirconia ceramic material independently developed by NAMTPL. With superior performance, it is more suitable for ceramic accessories used in dry grinding processes.",
    techTable: {
      rowHeader: "Detection Indicator",
      columns: ["Value", "Detection Standard"],
      rows: [
        { label: "Zirconium Dioxide (Hf) Content", values: ["89±0.5%", "GB/T 21114-2019"] },
        { label: "Density (g/cm³)", values: ["≥5.9", "GB/T 25995-2010"] },
        { label: "Water Absorption (%)", values: ["<0.05", "GB/T 3299-2011"] },
        { label: "Thermal Conductivity (20°C)", values: ["3±0.5", "ASTME 1269 / ASTME 1461"] },
        { label: "Thermal Expansivity (40-400°C)", values: ["11±0.2", "GB/T 16535-2008"] },
        { label: "Vickers Hardness (HV)", values: ["≥1200", "GB/T 16534-2009"] },
        { label: "Bending Strength (MPa)", values: ["≥950", "GB/T 6569-2006"] },
        { label: "Fracture Toughness (MPa.m)", values: ["≥11", "JISR 1607-2010"] },
        { label: "Impact Toughness (KJ/m²)", values: ["≥20", "GB/T 14389-1993"] },
        { label: "Compressive Strength (MPa)", values: ["≥2800", "GB/T 8489-2006"] },
        { label: "Modulus Of Elasticity (GPa)", values: ["≥210", "GB/T 10700-2006"] },
      ],
    },
    representativeProducts: ["Valve cores", "Plungers", "Classification wheels", "Agitation rods", "Wear liners"],
  },
  {
    slug: "y-zr-3y-series",
    category: "Ceramic Parts",
    categoryHref: "/products#ceramic-parts",
    name: "Y-ZR (3Y Series)",
    heroImg: "/images/ceramic_part.png",
    color: "#ffffff",
    description:
      "Yttrium-stabilised zirconia parts offering outstanding toughness and dimensional accuracy for precision grinding and milling applications.",
    techTable: {
      rowHeader: "Detection Indicator",
      columns: ["Value", "Detection Standard"],
      rows: [
        { label: "Zirconium Dioxide (Hf) Content", values: ["94.5±0.5%", "GB/T 21114-2019"] },
        { label: "Density (g/cm³)", values: ["≥6.0", "GB/T 25995-2010"] },
        { label: "Water Absorption (%)", values: ["<0.05", "GB/T 3299-2011"] },
        { label: "Thermal Conductivity (20°C)", values: ["3±0.5", "ASTME 1269 / ASTME 1461"] },
        { label: "Thermal Expansivity (40-400°C)", values: ["11±0.2", "GB/T 16535-2008"] },
        { label: "Vickers Hardness (HV)", values: ["≥1200", "GB/T 16534-2009"] },
        { label: "Bending Strength (MPa)", values: ["≥900", "GB/T 6569-2006"] },
        { label: "Fracture Toughness (MPa.m)", values: ["≥10", "JISR 1607-2010"] },
        { label: "Impact Toughness (KJ/m²)", values: ["≥20", "GB/T 14389-1993"] },
        { label: "Compressive Strength (MPa)", values: ["≥2800", "GB/T 8489-2006"] },
        { label: "Modulus Of Elasticity (GPa)", values: ["≥200", "GB/T 10700-2006"] },
      ],
    },
    representativeProducts: ["Valve cores", "Capstans", "Wire drawing drums", "Wire guides", "Textile machinery parts"],
  },
  {
    slug: "pr-zr-yellow-zirconia-series",
    category: "Ceramic Parts",
    categoryHref: "/products#ceramic-parts",
    name: "PR-ZR (Yellow Zirconia Series)",
    heroImg: "/images/ceramic_part.png",
    color: "#e8b84b",
    description:
      "Yellow yttrium-stabilised zirconia — combining the toughness of 3Y-TZP with distinctive colour coding for easy part identification.",
    techTable: {
      rowHeader: "Detection Indicator",
      columns: ["Value", "Detection Standard"],
      rows: [
        { label: "Zirconium Dioxide (Hf) Content", values: ["94±0.5%", "GB/T 21114-2019"] },
        { label: "Density (g/cm³)", values: ["≥6.0", "GB/T 25995-2010"] },
        { label: "Water Absorption (%)", values: ["<0.05", "GB/T 3299-2011"] },
        { label: "Thermal Conductivity (20°C)", values: ["3±0.5", "ASTME 1269 / ASTME 1461"] },
        { label: "Thermal Expansivity (40-400°C)", values: ["11±0.2", "GB/T 16535-2008"] },
        { label: "Vickers Hardness (HV)", values: ["≥1200", "GB/T 16534-2009"] },
        { label: "Bending Strength (MPa)", values: ["≥850", "GB/T 6569-2006"] },
        { label: "Fracture Toughness (MPa.m)", values: ["≥8", "JISR 1607-2010"] },
        { label: "Impact Toughness (KJ/m²)", values: ["≥20", "GB/T 14389-1993"] },
        { label: "Compressive Strength (MPa)", values: ["≥2800", "GB/T 8489-2006"] },
        { label: "Modulus Of Elasticity (GPa)", values: ["≥200", "GB/T 10700-2006"] },
      ],
    },
    representativeProducts: ["Bead mill accessories", "Ball milling jars", "Turbines", "Nozzles", "Molds"],
  },
  {
    slug: "alumina-ceramic-series",
    category: "Ceramic Parts",
    categoryHref: "/products#ceramic-parts",
    name: "Alumina Ceramic Series",
    heroImg: "/images/ceramic_part.png",
    color: "#f0e8d8",
    description:
      "Products include 95 alumina and 99 alumina ceramic parts, offering excellent chemical resistance and electrical insulation properties.",
    representativeProducts: ["Electronic substrates", "Mechanical seals", "Medical plungers", "Corrosion-resistant piping & valves", "Insulating components"],
  },

  // ── Injection Molding ──────────────────────────────────────────────────
  {
    slug: "injection-molding-ceramic-parts",
    category: "Injection Molding Ceramic Parts",
    categoryHref: "/products#injection-molding",
    name: "Injection Molding Ceramic Parts",
    heroImg: "/images/injection_molding.png",
    description:
      "Using the advanced Ceramic Injection Molding (CIM) process, we mass-produce small, precise, and complex three-dimensional ceramic products. Custom parts available in different materials, colours and properties — with biocompatibility, good wear resistance, high strength and rich colour options.",
    processCharacteristics: [
      {
        title: "Technological Advantages",
        points: [
          "High design freedom — internal threads, inverted buckles, small apertures and complex 3-D shapes achievable in a single process.",
          "Precision tolerances — dimensional tolerance accuracy of ±0.5%; higher accuracy achievable with secondary processing.",
          "Excellent material properties — high density, high strength, high fracture toughness and high hardness.",
          "Mass production ready — CIM enables consistent, high-volume output of small, advanced ceramic components at competitive cost.",
        ],
      },
    ],
  },
];

export function getProductBySlug(slug: string): ProductDetail | undefined {
  return products.find((p) => p.slug === slug);
}