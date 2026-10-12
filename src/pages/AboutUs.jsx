import { useState } from "react";
import { Link } from "react-router-dom";


 import hero from "../images/about-hero.png";
 import growth from "../images/growth.png";
// // import infra from "../images/infrastructure.png";
 import infra from "../images/infra.png";
 import infra2 from "../images/lasers.png";
 import infra1 from "../images/press.png";
import infra3 from "../images/power.png";

import timelines from "../images/timelines.png";
import cert1 from "../images/certification1.png";
import cert2 from "../images/certification2.png";
import cert3 from "../images/certification3.png";

const IMAGES = {
   hero,
 growth,
//   infra,
   infra,
   infra1,
   infra2,
 infra3,

   timelines,
  cert1,
  cert2,
  cert3,
};

/* ------------------------------------------------------------------
   IMAGES — placeholders only. Replace each URL with your own photo later
   (e.g. "/images/about-hero.jpg" or an imported file from src/assets).
------------------------------------------------------------------- */

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

function SectionHeading({ title, sub, dark = false }) {
  return (
    <div className="mb-8">
      <h2 className={`text-3xl font-bold sm:text-4xl ${dark ? "text-white" : "text-gray-900"}`}>
        {title}
      </h2>
      <div className="mt-4 h-1 w-16 bg-red-700" />
      {sub && <p className={`mt-5 max-w-3xl ${dark ? "text-gray-400" : "text-gray-600"}`}>{sub}</p>}
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
const growthStats = [
  { big: "2019", small: "Year established" },
  { big: "25+", small: "Machines installed" },
  { big: "15,000", small: "Sq.ft facility" },
  { big: "ISO 9001:2015", small: "Certified" },
];

const infrastructure = [
  {
    title: "Press Shop",
    text: "Hydraulic presses (50T – 300T) and pneumatic power presses (110T – 400T) with coil feeding for automation.",
    img: IMAGES.infra1,
  },
  {
    title: "Tube & Laser Shop",
    text: "3KW CNC tube laser cutting, tube cross cutting SPM machines, CO2 welding and drilling machines.",
    img: IMAGES.infra2,
  },
  {
    title: "Inspection Lab & Power Backup",
    text: "In-house inspection lab and quality control, supported by a 125 KVA generator for uninterrupted production.",
    img: IMAGES.infra3,
  },
];

const team = [
  {
    title: "Leadership",
    text: "Led by Mrs. K. Raja Rajeshwari, guiding the company with a focus on ethics, quality and growth.",
  },
  {
    title: "Production",
    text: "Skilled operators working on dedicated press, tube and laser lines with safety practices.",
  },
  {
    title: "Quality",
    text: "Inspection and quality control team driving 5S, Kaizen, SOPs and rejection reduction.",
  },
  {
    title: "Tool Room & Engineering",
    text: "In-house press tool design, die development, fixture and gauge manufacturing.",
  },
];

// TODO: replace the labels below with the real year for each milestone
const timeline = [
  { year: "2019", title: "Company established", text: "Started operations as a tube cutting unit." },
  { year: "Growth", title: "Tubular manufacturing", text: "Expanded into tubular components and value-added manufacturing." },
  { year: "Growth", title: "Press & sheet metal", text: "Added hydraulic and pneumatic presses for sheet metal components." },
  { year: "Growth", title: "Laser cutting", text: "Introduced CNC tube laser cutting for precision and speed." },
  { year: "Milestone", title: "ISO 9001:2015 certification", text: "Quality management system certified." },
  { year: "Today", title: "25+ machines, OEM & Tier-1 customers", text: "Serving the automotive OEM sector with reliable, cost-effective solutions." },
];

const certifications = [
  {
    title: "ISO 9001:2015",
    text: "Certified quality management system ensuring consistent quality in every order.",
  },
  {
    title: "OEM & Tier-1 Approvals",
    text: "Approved by OEM and Tier-1 customers, with customer audits and compliance maintained.",
  },
  {
    title: "Quality & Documentation System",
    text: "Strong documentation, SOPs and KPI-driven reviews supporting traceability.",
  },
];

const certPoints = [
  "ISO 9001:2015 certified company",
  "Customer audits & compliance maintained",
  "Approved by OEM & Tier-1 customers",
];

const certImages = [
  { src: IMAGES.cert1, alt: "Certificate 1", caption: "Certificate 1" },
  { src: IMAGES.cert2, alt: "ISO 9001:2015 Certificate", caption: "ISO 9001:2015 Certificate" },
  { src: IMAGES.cert3, alt: "Certificate 3", caption: "Certificate 3" },
];
/* ------------------------------- page ------------------------------- */
export default function AboutUs() {
  return (
    <div className="bg-white text-gray-800">
      {/* ============ BANNER ============ */}
      <section className="relative">
        <Img src={IMAGES.hero} alt="RMD Industries" className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-900/85 to-red-950/70" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <nav className="mb-4 text-sm text-gray-300" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2 text-red-500">/</span>
            <span className="text-white">About Us</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">About Us</h1>
          <div className="mt-5 h-1 w-20 bg-red-700" />
          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            A precision engineering and manufacturing company delivering solutions,
            not just components.
          </p>
        </div>
      </section>

      {/* ============ INTRO ============ */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <h2 className="text-3xl font-bold text-gray-900 lg:col-span-1">
            Who we are
            <span className="mt-4 block h-1 w-16 bg-red-700" />
          </h2>
          <div className="space-y-4 text-gray-700 lg:col-span-2">
            <p>
              RMD Industries was established in 2019 and specializes in automotive
              components and tubular manufacturing. Led by Mrs. K. Raja Rajeshwari,
              the company has evolved from tube cutting to advanced tubular and
              value-added manufacturing.
            </p>
            <p>
              As an ISO 9001:2015 certified company, we deliver high-quality,
              reliable and cost-effective solutions to the Automotive OEM sector.
            </p>
          </div>
        </div>
      </Section>

      {/* ============ COMPANY GROWTH ============ */}
      <Section className="bg-gray-100">
        <SectionHeading
          title="Company Growth"
          sub="From a tube cutting unit in 2019 to a multi-process manufacturing facility serving OEM and Tier-1 customers."
        />

{/* after: full image, no crop */}
<img
  src={IMAGES.growth}
  alt="Company growth"
  loading="lazy"
  className="mb-10 h-auto w-full"
/>        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4 text-gray-700">
            <p>
              Our growth has been driven by customer requirements. Starting with tube
              cutting, we added tubular manufacturing, press and sheet metal
              capabilities and CNC tube laser cutting, so customers can source more
              parts from one supplier.
            </p>
            <p>
              Lean manufacturing, Kaizen and continuous process improvement keep us
              efficient as we scale, with investment in both people and technology.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {growthStats.map((s) => (
              <div key={s.small} className="border-b-4 border-red-800 bg-white p-6 text-center shadow-sm">
                <div className="text-2xl font-extrabold text-gray-900 sm:text-3xl">{s.big}</div>
                <div className="mt-1 text-sm text-gray-600">{s.small}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ============ INFRASTRUCTURE & TEAM ============ */}
      <Section>
        <SectionHeading
          title="Infrastructure & Team"
          sub="A well-organized 15,000 sq.ft facility with dedicated production lines and a skilled workforce."
        />
        <Img src={IMAGES.infra} alt="Our infrastructure" className="mb-10 h-56 w-full sm:h-80" />

        <h3 className="mb-6 text-2xl font-semibold text-gray-900">Infrastructure</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {infrastructure.map((i) => (
            <article key={i.title} className="group overflow-hidden border border-gray-200 bg-white">
              <div className="overflow-hidden">
                <Img
                  src={i.img}
                  alt={i.title}
                  className="h-44 w-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="border-b-4 border-transparent p-5 transition-colors group-hover:border-red-800">
                <h4 className="font-semibold text-gray-900">{i.title}</h4>
                <p className="mt-2 text-sm text-gray-600">{i.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ============ TIMELINE ============ */}
      <Section className="bg-gray-900">
        <SectionHeading
          title="Timeline"
          dark
          sub="Key steps in our journey so far."
        />
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <Img src={IMAGES.timelines} alt="Our journey" className="h-72 w-full lg:sticky lg:top-24 lg:h-[520px]" />
          <ol className="relative ml-3 border-l-2 border-gray-700">
            {timeline.map((t) => (
              <li key={t.title} className="relative mb-9 pl-8 last:mb-0">
                <span className="absolute -left-[9px] top-1 h-4 w-4 border-2 border-gray-900 bg-red-700" />
                <span className="text-sm font-semibold text-red-400">{t.year}</span>
                <h3 className="mt-1 text-lg font-semibold text-white">{t.title}</h3>
                <p className="mt-1 text-sm text-gray-400">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* ============ CERTIFICATIONS & REGISTRATIONS ============ */}
      <Section>
  <SectionHeading
    title="Certifications & Registrations"
    sub="Quality that is audited, documented and trusted by OEM and Tier-1 customers."
  />

  {/* 3 certificates in one row */}
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
    {certImages.map((c) => (
      <figure key={c.src} className="group">
        <a
          href={c.src}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden border-4 border-gray-200 bg-gray-50 shadow-sm transition-all group-hover:border-red-800 group-hover:shadow-lg"
        >
          <img
            src={c.src}
            alt={c.alt}
            loading="lazy"
            className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </a>
        <figcaption className="mt-3 text-center text-sm font-medium text-gray-700">
          {c.caption}
        </figcaption>
      </figure>
    ))}
  </div>

  {/* Details */}
  <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {certifications.map((c) => (
      <div key={c.title} className="border border-gray-200 border-t-4 border-t-red-800 bg-white p-6">
        <h3 className="font-semibold text-gray-900">{c.title}</h3>
        <p className="mt-2 text-sm text-gray-600">{c.text}</p>
      </div>
    ))}
    {/* TODO: add other registrations (GST, MSME/Udyam, etc.) here */}
  </div>

  <div className="mt-8">
    <CheckList items={certPoints} />
  </div>
</Section>

      {/* ============ CTA ============ */}
      <section className="bg-red-900 px-4 py-14 text-center sm:px-6">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Want to work with us?</h2>
        <p className="mx-auto mt-3 max-w-xl text-red-100">
          Share your requirement and we will get back to you with a quotation.
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