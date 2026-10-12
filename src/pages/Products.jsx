import { Link } from "react-router-dom";

/* Put these files in src/images/ (names below = the renamed files I gave you).
   Banner reuses your About Us banner image. */
import bannerImg from "../images/about-hero.png";
import pro1 from "../images/product1.png";
import pro2 from "../images/product2.png";
import pro3 from "../images/product3.png";
import pro4 from "../images/product4.png";
import MachinesSection from "../components/MachinesSection";




/* ------------------------------- data ------------------------------- */
const products = [
  {
    id: "frame-weldment",
    title: "Frame & Weldment Assemblies",
    tag: "Vehicle Structures",
    image: pro1,
    text: "Heavy-duty welded frame and weldment assemblies for vehicles, built with precise fixtures and gauges for consistent fit and strength.",
    points: ["Frame Assy – 230 Kgs", "Weldment Assy – 170 Kgs"],
  },
  {
    id: "battery-weldments",
    title: "Weldments / Fabrication Parts",
    tag: "3W Auto OEM",
    image: pro2,
    text: "Battery enclosure weldments for 3W Auto OEM in 3 variants, supplied as top cover, center frame and bottom cover assemblies.",
    points: ["Top Cover Assy", "Center Frame Assy", "Bottom Cover Assy"],
    table: {
      rows: [
        { label: "Weight (Kgs)", values: ["76", "101", "130"] },
        { label: "Size", values: ["1100 x 300", "1700 x 350", "2450 x 600"] },
      ],
    },
  },
  {
    id: "sheet-metal-tubular",
    title: "Sheet Metal & Tubular Parts",
    tag: "Core Expertise",
    image: pro3,
    text: "A wide range of formed, cut and welded sheet metal and tubular components, including reducers, stepped tubes, bent tubes, brackets and covers.",
    points: [
      "Tube cutting, forming and bending",
      "Press and laser cut sheet metal parts",
      "Custom shapes as per customer drawing",
    ],
  },
  {
    id: "ev-accessories",
    title: "EV / Vehicle – Accessory Parts",
    tag: "EV Components",
    image: pro4,
    text: "Accessory parts for EV battery packs, supplied for 10 kWh, 32 kWh and 50 kWh variants.",
    points: ["Module End Plate Weld Assembly", "Module Retainer Assembly"],
    table: {
      rows: [
        { label: "Weight (Kgs)", values: ["22", "31", "44"] },
        { label: "Size", values: ["900 x 300", "1200 x 350", "1450 x 410"] },
      ],
    },
  },
];

const variants = ["10 kWh", "32 kWh", "50 kWh"];

const strengths = [
  "Precision manufacturing to OEM drawings",
  "ISO 9001:2015 certified quality system",
  "In-house press tool, fixture & gauge development",
  "On-time delivery for bulk and customized orders",
];

/* ---------------------------- small pieces ---------------------------- */
function Check() {
  return (
    <svg viewBox="0 0 20 20" className="mt-1 h-4 w-4 shrink-0 fill-red-700">
      <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0z" />
    </svg>
  );
}

function SpecTable({ table }) {
  return (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full min-w-[320px] border-collapse text-sm">
        <thead>
          <tr className="bg-gray-900 text-white">
            <th className="border border-gray-700 px-4 py-2.5 text-left font-semibold">Variant</th>
            {variants.map((v) => (
              <th key={v} className="border border-gray-700 px-4 py-2.5 text-center font-semibold">
                {v}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((r) => (
            <tr key={r.label} className="odd:bg-white even:bg-gray-100">
              <td className="border border-gray-200 px-4 py-2.5 font-semibold text-gray-900">
                {r.label}
              </td>
              {r.values.map((v, i) => (
                <td key={i} className="border border-gray-200 px-4 py-2.5 text-center text-gray-700">
                  {v}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ------------------------------- page ------------------------------- */
export default function Products() {
  return (
    <div className="bg-white text-gray-800">
      {/* ============ BANNER ============ */}
      <section className="relative">
        <img src={bannerImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-900/85 to-red-950/70" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <nav className="mb-4 text-sm text-gray-300" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2 text-red-500">/</span>
            <span className="text-white">Our Products</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">Our Products</h1>
          <div className="mt-5 h-1 w-20 bg-red-700" />
          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            Automotive, EV and tubular components, engineered and manufactured to
            OEM standards.
          </p>
        </div>
      </section>

      {/* ============ CATEGORY QUICK NAV ============ */}
      <section className="border-b border-gray-200 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              className="group flex items-center gap-3 border border-gray-200 bg-white p-4 transition-colors hover:border-red-800"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-red-800 font-bold text-white">
                {i + 1}
              </span>
              <span className="text-sm font-semibold text-gray-900 group-hover:text-red-800">
                {p.title}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ============ PRODUCT BLOCKS ============ */}
      {products.map((p, i) => {
        const dark = i % 2 === 1;
        return (
          <section
            key={p.id}
            id={p.id}
            className={`scroll-mt-16 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 ${dark ? "bg-gray-900" : "bg-white"}`}
          >
            <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
              {/* image: full, never cropped. click to open full size */}
              <a
                href={p.image}
                target="_blank"
                rel="noopener noreferrer"
                className={`block border-4 bg-white shadow-lg transition-colors ${
                  dark ? "border-gray-700 hover:border-red-700 lg:order-2" : "border-gray-200 hover:border-red-800"
                }`}
              >
                <img src={p.image} alt={p.title} loading="lazy" className="h-auto w-full" />
              </a>

              <div className={dark ? "lg:order-1" : ""}>
                <span className="text-sm font-semibold uppercase tracking-wider text-red-600">
                  {p.tag}
                </span>
                <h2 className={`mt-2 text-3xl font-bold sm:text-4xl ${dark ? "text-white" : "text-gray-900"}`}>
                  {p.title}
                </h2>
                <div className="mt-4 h-1 w-16 bg-red-700" />
                <p className={`mt-5 ${dark ? "text-gray-300" : "text-gray-600"}`}>{p.text}</p>

                <ul className="mt-6 space-y-2.5">
                  {p.points.map((pt) => (
                    <li key={pt} className={`flex gap-3 ${dark ? "text-gray-200" : "text-gray-700"}`}>
                      <Check />
                      {pt}
                    </li>
                  ))}
                </ul>

                {p.table && <SpecTable table={p.table} />}

                <Link
                  to="/contact-us"
                  className="mt-8 inline-block bg-red-800 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
                >
                  Enquire about this product
                </Link>
              </div>
            </div>
          </section>
        );
      })}

      <MachinesSection/>

      {/* ============ WHY RMD ============ */}
      <section className="bg-gray-100 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900">Why choose RMD Industries</h2>
          <div className="mt-4 h-1 w-16 bg-red-700" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map((s) => (
              <div key={s} className="border-t-4 border-red-800 bg-white p-6 shadow-sm">
                <p className="font-medium text-gray-800">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="bg-red-900 px-4 py-14 text-center sm:px-6">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Need a custom part?</h2>
        <p className="mx-auto mt-3 max-w-xl text-red-100">
          Send us your drawing or requirement and we will get back to you with a quotation.
        </p>
        <Link
          to="/contact-us"
          className="mt-7 inline-block bg-gray-900 px-8 py-3 font-semibold text-white transition-colors hover:bg-gray-800"
        >
          Get a Quote
        </Link>
      </section>
    </div>
  );
}