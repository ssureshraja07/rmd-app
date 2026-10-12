import { useState } from "react";
import { Link } from "react-router-dom";


import qualityImg from "../images/quality.jpg";
import coilImg from "../images/coil.jpg";
import cuttingImg from "../images/cutting.jpg";
import drillImg from "../images/drill.jpg";
import powerImg from "../images/power.png";
import powerpressImg from "../images/powerpress.jpg";
import strengthImg from "../images/strength.jpg";
import tubecuttingImg from "../images/tubecutting.jpg";
import weldingImg from "../images/welding-m.jpg";
import rmd1Img from "../images/rmd1.jpg";
import rmd2Img from "../images/rmd2.jpg";
import capacityImg from "../images/capacity.jpg";
import aboutImg from "../images/about.jpg";
//import capacity from "../images/capacity.jpg";



/* ------------------------------------------------------------------
   IMAGES — placeholders only. Later, replace each URL with your own
   (e.g. import img from "../assets/press.jpg" or "/images/press.jpg").
------------------------------------------------------------------- */

const IMAGES = {
  hero: rmd1Img,
  about: aboutImg,
  overview: strengthImg,
  press: powerImg,
  pneumatic: powerpressImg,
  laser: cuttingImg,
  tube: tubecuttingImg,
  welding: weldingImg,
  drilling: drillImg,
  coil: coilImg,
  shop1: rmd1Img,
  shop2: rmd2Img,
  shop3: qualityImg,
  shop4: strengthImg,
  quality: qualityImg,
  capacity: capacityImg,
  cta: rmd2Img,
};
/* Image with a dark fallback box if the URL fails */
function Img({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 text-sm text-gray-500 ${className}`}
      >
        {alt}
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}

/* ---------------------------- small helpers ---------------------------- */
function Check({ className = "text-red-700" }) {
  return (
    <svg viewBox="0 0 20 20" className={`mt-1 h-4 w-4 shrink-0 fill-current ${className}`}>
      <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0z" />
    </svg>
  );
}

function CheckList({ items, dark = false }) {
  return (
    <ul className="space-y-2.5">
      {items.map((i) => (
        <li key={i} className={`flex gap-3 ${dark ? "text-gray-300" : "text-gray-700"}`}>
          <Check className={dark ? "text-red-500" : "text-red-700"} />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

function SectionHeading({ title, sub, dark = false, center = false }) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      <h2 className={`text-3xl font-bold sm:text-4xl ${dark ? "text-white" : "text-gray-900"}`}>
        {title}
      </h2>
      <div className={`mt-4 h-1 w-16 bg-red-700 ${center ? "mx-auto" : ""}`} />
      {sub && (
        <p className={`mt-5 max-w-2xl ${center ? "mx-auto" : ""} ${dark ? "text-gray-400" : "text-gray-600"}`}>
          {sub}
        </p>
      )}
    </div>
  );
}

function Section({ children, className = "" }) {
  return (
    <section className={`px-4 py-16 sm:px-6 sm:py-20 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

/* ------------------------------- data ------------------------------- */
const highlights = [
  { big: "2019", small: "Established in" },
  { big: "ISO 9001:2015", small: "Certified Company" },
  { big: "High Precision", small: "Manufacturing" },
  { big: "Customer-Centric", small: "Approach" },
];

const aboutPoints = [
  "Precision engineering and manufacturing company",
  "Specializing in automotive components and tubular manufacturing",
  "Led by Mrs. K. Raja Rajeshwari",
  "Evolved from tube cutting to advanced tubular & value-added manufacturing",
  "ISO 9001:2015 Certified",
  "Delivering high-quality, reliable and cost-effective solutions to the Automotive OEM sector",
];

const coreExpertise = [
  { title: "Automotive Components", text: "Precision parts built to OEM standards." },
  { title: "Sheet Metal Fabrication", text: "Press and laser based sheet metal parts." },
  { title: "Tubular Assemblies", text: "Cut, formed and welded tubular assemblies." },
];

const strengths = [
  "Precision Manufacturing",
  "On-Time Delivery",
  "Customer-Centric Approach",
  "Committed to Lean Manufacturing and continuous improvement",
];

const values = [
  "Resolute ethics, integrity",
  "Customer focus characterized by high level of customer satisfaction",
  "Outright aversion to waste",
  "Exhibiting leadership in all aspects",
  "Steadfast commitment to business and personal growth",
  "Passion for Excellence",
];

const missionPoints = [
  "Innovation-Driven Manufacturing",
  "Operational Excellence",
  "Customer-Centric Approach",
  "Continuous Investment in People & Technology",
];

const visionPoints = [
  "Precision engineering and fabrication",
  "Innovative solutions",
  "Reliable solutions",
  "Competitive solutions",
];

const facilities = [
  { name: "Hydraulic Press", spec: "50T – 300T Capacity", img: IMAGES.press },
  { name: "Pneumatic Power Press", spec: "110T – 400T", img: IMAGES.pneumatic },
  { name: "CNC Tube Laser Cutting Machine", spec: "3KW", img: IMAGES.laser },
  { name: "Tube Cross Cutting SPM Machines", spec: "Special Purpose Machines", img: IMAGES.tube },
  { name: "CO2 Welding Machines", spec: "Fabrication & assembly", img: IMAGES.welding },
  { name: "Drilling Machines & Cropping SPM", spec: "Drilling and cropping", img: IMAGES.drilling },
  { name: "Coil Feeding System", spec: "For automation", img: IMAGES.coil },
];

const stats = [
  { big: "25+", small: "Machines Installed" },
  { big: "15,000", small: "Sq.ft Facility" },
  { big: "125 KVA", small: "Generator Backup" },
  { big: ">90%", small: "5S Implementation" },
];

const capacity = [
  "25+ Machines Installed",
  "High Volume Production Capability",
  "Efficient Handling of Sheet Metal & Tubular Components",
  "Capability to handle bulk and customized orders",
  "100% Production Efficiency with optimized planning",
];

const automation = [
  "Special Purpose Machines (SPM) for Tube Cutting",
  "In-house Press Tool Design & Development",
  "Fixture & Gauge Manufacturing",
  "Continuous Process Improvement (VAVE)",
];

const shopfloor = [
  { text: "15,000 Sq.ft Well-Organized Facility", img: IMAGES.shop1 },
  { text: "Dedicated Production Lines (Press / Tube / Laser)", img: IMAGES.shop2 },
  { text: "5S Implementation & Clean Work Environment", img: IMAGES.shop3 },
  { text: "Skilled Workforce with Safety Practices", img: IMAGES.shop4 },
];

const shopfloorMore = [
  "In-house Inspection Lab & Quality Control",
  "Power Backup Facility (125 KVA Generator)",
];

const quality = [
  "Rejection reduction & process control",
  "5S implementation (>90%)",
  "Inspection system strengthening",
  "Kaizen & SOP implementation",
];

const performance = [
  "Real-time production output monitoring",
  "Strong on-time delivery commitment",
  "Continuous rejection reduction initiatives",
  "Improved productivity & efficiency",
  "KPI-driven performance review system",
];

const approvals = [
  "Approved by OEM & Tier-1 customers",
  "Customer audits & compliance maintained",
  "Strong quality & documentation system",
  "Continuous focus on customer satisfaction",
];

const projects = [
  "Press tools & die development",
  "Tubular & sheet metal components",
  "Laser cutting (tube & sheet)",
  "Fixture & gauge manufacturing",
];

/* ------------------------------- page ------------------------------- */
export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      {/* ============ HERO ============ */}
      <section className="relative">
        <Img src={IMAGES.hero} alt="RMD Industries plant" className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-900/85 to-red-950/70" />
        <div className="relative mx-auto max-w-7xl px-4 pb-40 pt-24 sm:px-6 sm:pt-32 lg:px-8 lg:pb-48">
          <p className="mb-4 inline-block border-l-4 border-red-700 pl-3 text-sm font-medium text-gray-300">
            ISO 9001:2015 Certified Company
          </p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Delivering solutions, not just components.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            Precision engineering and manufacturing of automotive components,
            sheet metal parts and tubular assemblies for the OEM sector.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact-us"
              className="bg-red-800 px-7 py-3 font-semibold text-white transition-colors hover:bg-red-700"
            >
              Get a Quote
            </Link>
            <Link
              to="/products"
              className="border border-gray-400 px-7 py-3 font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Our Products
            </Link>
          </div>
        </div>
      </section>

      {/* ============ HIGHLIGHT BAR ============ */}
      <div className="relative z-10 mx-auto -mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 border-b-4 border-red-800 bg-gray-900 shadow-2xl lg:grid-cols-4">
          {highlights.map((h, i) => (
            <div
              key={h.big}
              className={`px-5 py-7 text-center ${i > 0 ? "lg:border-l lg:border-gray-800" : ""} ${
                i % 2 === 1 ? "border-l border-gray-800 lg:border-l" : ""
              } ${i > 1 ? "border-t border-gray-800 lg:border-t-0" : ""}`}
            >
              <div className="text-xl font-bold text-white sm:text-2xl">{h.big}</div>
              <div className="mt-1 text-sm text-red-400">{h.small}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ============ ABOUT US ============ */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <Img src={IMAGES.about} alt="About RMD Industries" className="h-80 w-full sm:h-[420px]" />
            <div className="absolute -bottom-5 -right-3 hidden bg-red-800 px-6 py-4 text-white shadow-xl sm:block">
              <div className="text-3xl font-bold">2019</div>
              <div className="text-sm">Year established</div>
            </div>
          </div>
          <div>
            <SectionHeading title="About Us" />
            <CheckList items={aboutPoints} />
          </div>
        </div>
      </Section>

      {/* ============ COMPANY OVERVIEW ============ */}
      <Section className="bg-gray-100">
        <SectionHeading
          title="Company Overview"
          sub="Established in 2019, focused on engineering and manufacturing solutions, with ISO 9001:2015 certification ensuring consistent quality."
        />
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 text-xl font-semibold text-gray-900">Core Expertise</h3>
            <div className="space-y-4">
              {coreExpertise.map((c) => (
                <div key={c.title} className="border-l-4 border-red-800 bg-white p-5 shadow-sm">
                  <h4 className="font-semibold text-gray-900">{c.title}</h4>
                  <p className="mt-1 text-sm text-gray-600">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-6 text-xl font-semibold text-gray-900">Key Strengths</h3>
            <Img src={IMAGES.overview} alt="Sheet metal work" className="mb-6 h-56 w-full" />
            <CheckList items={strengths} />
          </div>
        </div>
      </Section>

      {/* ============ MISSION / VISION ============ */}
      <Section className="bg-gray-900">
        <SectionHeading title="Mission & Vision" dark />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="border-t-4 border-red-700 bg-gray-800 p-8">
            <h3 className="mb-4 text-2xl font-bold text-white">Mission</h3>
            <p className="mb-6 text-gray-300">
              To deliver high-quality, cost-effective manufacturing solutions while
              driving sustainable growth and long-term customer value.
            </p>
            <CheckList items={missionPoints} dark />
          </div>
          <div className="border-t-4 border-red-700 bg-gray-800 p-8">
            <h3 className="mb-4 text-2xl font-bold text-white">Vision</h3>
            <p className="mb-6 text-gray-300">
              To be a globally recognized leader in precision engineering and
              fabrication, delivering innovative, reliable and competitive solutions.
            </p>
            <CheckList items={visionPoints} dark />
            <p className="mt-8 border-l-4 border-red-700 pl-4 text-lg font-semibold text-white">
              Delivering solutions, not just components.
            </p>
          </div>
        </div>
      </Section>

      {/* ============ OUR VALUES ============ */}
      <Section>
        <SectionHeading title="Our Values" center />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <div
              key={v}
              className="flex gap-4 border border-gray-200 bg-white p-6 transition-colors hover:border-red-800"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-red-800 font-bold text-white">
                {i + 1}
              </span>
              <p className="font-medium text-gray-800">{v}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ============ MANUFACTURING FACILITIES ============ */}
      <Section className="bg-gray-100">
        <SectionHeading
          title="Manufacturing Facilities"
          sub="Press, laser, tube and welding capabilities under one roof."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f) => (
            <article key={f.name} className="group overflow-hidden bg-white shadow-sm">
              <div className="overflow-hidden">
                <Img
                  src={f.img}
                  alt={f.name}
                  className="h-48 w-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="border-b-4 border-transparent p-5 transition-colors group-hover:border-red-800">
                <h3 className="font-semibold text-gray-900">{f.name}</h3>
                <p className="mt-1 text-sm text-red-800">{f.spec}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ============ STATS ============ */}
      <section className="bg-red-900 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.small}>
              <div className="text-4xl font-extrabold text-white sm:text-5xl">{s.big}</div>
              <div className="mt-2 text-sm text-red-200">{s.small}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ PRODUCTION CAPACITY + AUTOMATION ============ */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Img src={IMAGES.capacity} alt="Production capacity" className="h-80 w-full lg:h-[520px]" />
          <div className="space-y-10">
            <div>
              <SectionHeading title="Production Capacity" />
              <CheckList items={capacity} />
            </div>
            <div>
              <h3 className="mb-5 text-2xl font-bold text-gray-900">Automation / Tools</h3>
              <CheckList items={automation} />
            </div>
          </div>
        </div>
      </Section>

     
      {/* ============ QUALITY + PERFORMANCE ============ */}
      <Section>
        <SectionHeading title="Quality & Performance" center />
        <div className="grid gap-8 lg:grid-cols-3">
          <Img src={IMAGES.quality} alt="Quality inspection" className="h-72 w-full lg:h-full" />
          <div className="border border-gray-200 p-7">
            <h3 className="mb-5 border-b-2 border-red-800 pb-2 text-xl font-semibold text-gray-900">
              Quality Improvements
            </h3>
            <CheckList items={quality} />
          </div>
          <div className="border border-gray-200 p-7">
            <h3 className="mb-5 border-b-2 border-red-800 pb-2 text-xl font-semibold text-gray-900">
              Production & Performance
            </h3>
            <CheckList items={performance} />
          </div>
        </div>
      </Section>

      {/* ============ APPROVALS + PROJECTS ============ */}
      <Section className="bg-gray-100">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="border-t-4 border-red-800 bg-white p-8 shadow-sm">
            <h3 className="mb-6 text-2xl font-bold text-gray-900">Major Customer Approvals</h3>
            <CheckList items={approvals} />
          </div>
          <div className="border-t-4 border-red-800 bg-white p-8 shadow-sm">
            <h3 className="mb-6 text-2xl font-bold text-gray-900">Key Projects Completed</h3>
            <CheckList items={projects} />
          </div>
        </div>
      </Section>

      {/* ============ CTA ============ */}
      <section className="relative">
        <Img src={IMAGES.cta} alt="RMD Industries" className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 to-red-950/85" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Have a requirement? Let's build it together.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Share your drawing or requirement and our team will get back to you
            with a quotation.
          </p>
          <Link
            to="/contact-us"
            className="mt-8 inline-block bg-red-800 px-8 py-3 font-semibold text-white transition-colors hover:bg-red-700"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}