import { useState } from "react";

/* ------------------------------- data ------------------------------- */
const technologies = [
  { name: "Hydraulic Press", spec: "50T – 300T Capacity" },
  { name: "Pneumatic Power Press", spec: "110T – 400T" },
  { name: "CNC Tube Laser Cutting Machine", spec: "3KW" },
  { name: "Tube Cross Cutting SPM Machines", spec: "Special Purpose Machines" },
  { name: "CO2 Welding Machines", spec: "Fabrication & assembly" },
  { name: "Drilling Machines & Cropping SPM", spec: "Drilling and cropping" },
  { name: "Coil Feeding System", spec: "For automation" },
];

const pressColumns = [
  "#",
  "Press Type & Tonnage",
  "Make",
  "Bed Size (L×W)",
  "Shut Height",
  "Stroke Length",
  "Stroke Adjustment",
  "Die Cushion Bed Size (L×W)",
  "Pitch (L×W)",
  "Die Cushion Stroke Length",
  "Die Cushion Tonnage",
  "Pin Dia",
];

const D = "-";

// [#, type, make, bed, shut, stroke, adjust, cushionBed, pitch, cushionStroke, cushionTonnage, pin]
const pneumaticPresses = [
  [1, "110T Pn Press", "Press Master", "900 × 550", "450", "100", "70", "330 × 270", "75 × 80", "100", "10T", "Dia 25"],
  [2, "110T Pn Press", "Press Master", "1000 × 630", "330", "100", "70", "330 × 270", "75 × 80", "100", "10T", "Dia 25"],
  [3, "160T Pn Press", "Press Master", "1200 × 750", "450", "125", "100", "200 × 340", "80 × 150", "125", "20T", "Dia 25"],
  [4, "210T Pn Press", "Press Master", "1500 × 1200", "610", "150", "180", "330 × 270", "75 × 80", "150", "20T", "Dia 25"],
  [5, "400T Pn Press", "Press Master", "1500 × 1250", "700", "500", "200", "800 × 660", "150 × 150", "300", "40T", "Dia 50"],
];

const hydraulicPresses = [
  [6, "40T Hyd", "Vin Star", "560 × 440", "530", "250", D, "150 × 150", "120 × 120", "200", "15T", "Dia 20"],
  [7, "60T Hyd", "Vin Star", "600 × 450", "750", "450", D, "200 × 200", "150 × 150", "200", "25T", "Dia 20"],
  [8, "80T Hyd", "Vin Star", "1000 × 1100", "1700", "500", D, "160 × 160", "120 × 120", "200", "25T", "Dia 20"],
  [9, "100T Hyd", "Vin Star", "850 × 720", "1020", "600", D, "200 × 300", "160 × 250", "250", "15T", "Dia 20"],
  [10, "100T Hyd", "Vin Star", "750 × 750", "840", "400", D, "200 × 200", "160 × 160", "250", "15T", "Dia 20"],
  [11, "100T Hyd", "Bemco", "750 × 750", "900", "600", D, "Single Rod", D, D, D, D],
  [12, "100T Hyd", "SPM", "500 × 500", "900", "600", D, "Single Rod", D, D, D, D],
  [13, "150T Hyd", "Vin Star", "880 × 1000", "1000", "650", D, "170 × 130", "140 × 100", "250", "40T", "Dia 25"],
  [14, "150T Hyd", "Vin Star", "800 × 800", "860", "500", D, "240 × 240", "200 × 200", "250", "40T", "Dia 25"],
  [15, "200T Hyd", "SPM", "800 × 800", "750", "450", D, "300 × 300", "85 × 85", "200", "40T", "Dia 25"],
  [16, "300T Hyd", "Press Master", "1100 × 900", "1000", "700", D, "480 × 240", "200 × 100", "300", "100T", "Dia 25"],
  [17, "300T Hyd", "Press Master", "1100 × 900", "1000", "700", D, "480 × 240", "200 × 100", "300", "100T", "Dia 25"],
  [18, "300T Hyd", "Press Master", "1000 × 1000", "850", "450", D, "440 × 440", "200 × 200", "300", "100T", "Dia 25"],
  [19, "300T Hyd", "SPM", "800 × 800", "750", "450", D, "450 × 450", "130 × 130", "300", "60T", "Dia 25"],
  [20, "300T Hyd", "SPM", "1000 × 1000", "800", "500", D, "560 × 560", "185 × 185", "300", "60T", "Dia 25"],
  [21, "300T Hyd", "SPM", "1000 × 1000", "750", "450", D, "580 × 580", "210 × 210", "300", "60T", "Dia 25"],
];

// [#, machine, make, capacity / details]
const otherMachines = [
  [22, "Lathe", "KISHAN", "3½ Feet"],
  [23, "4 Feet Lathe", "JAY", "4½ Feet"],
  [24, "M1TR", "EASTEAM", D],
  [25, "Surface Grinding", "RAJIND", "200 × 350"],
  [26, "Radial Drilling M/c", "PAVAN M/C TOOLS", "HRD80×25"],
  [27, "Welding Machine", "Panasonic", "300 kVA"],
  [28, "Welding Machine", "ESAB", "300 kVA"],
  [29, "Welding Machine", "ESAB", "300 kVA"],
  [30, "Notching Machine", "ToolTech", "Special Purpose Machine"],
  [31, "Face Notching Machine", "ToolTech", "Special Purpose Machine"],
  [32, "3D Tube Laser Cutting Machine", "Metha", "Tube Dia – 20 to 120 mm Capacity"],
  [33, "Angle Cutting Machine", "Own Make", "Tube Dia – 19 to 80 mm"],
  [34, "Generator", "Mahendra", "150 kVA"],
];

const tabs = [
  { id: "pneumatic", label: "Pneumatic Presses", count: pneumaticPresses.length },
  { id: "hydraulic", label: "Hydraulic Presses", count: hydraulicPresses.length },
  { id: "other", label: "Other Machines", count: otherMachines.length },
];

/* ---------------------------- small pieces ---------------------------- */
function PressTable({ rows }) {
  return (
    <table className="w-full border-collapse text-xs sm:text-sm">
      <thead>
        <tr className="bg-gray-900 text-white">
          {pressColumns.map((c) => (
            <th key={c} className="border border-gray-700 px-3 py-3 text-center font-semibold">
              {c}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r[0]} className="odd:bg-white even:bg-gray-100 hover:bg-red-50">
            {r.map((cell, i) => (
              <td
                key={i}
                className={`whitespace-nowrap border border-gray-200 px-3 py-2 text-center text-gray-700 ${
                  i === 1 ? "font-semibold text-gray-900" : ""
                }`}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function OtherTable({ rows }) {
  return (
    <table className="w-full border-collapse text-xs sm:text-sm">
      <thead>
        <tr className="bg-gray-900 text-white">
          {["#", "Machine", "Make", "Capacity / Details"].map((c) => (
            <th key={c} className="border border-gray-700 px-4 py-3 text-left font-semibold">
              {c}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r[0]} className="odd:bg-white even:bg-gray-100 hover:bg-red-50">
            {r.map((cell, i) => (
              <td
                key={i}
                className={`border border-gray-200 px-4 py-2.5 text-gray-700 ${
                  i === 1 ? "font-semibold text-gray-900" : ""
                }`}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/* ------------------------------- export ------------------------------- */
export default function MachinesSection() {
  const [tab, setTab] = useState("pneumatic");

  return (
    <>
      {/* ============ MACHINES & TECHNOLOGIES USED ============ */}
      <section className="bg-gray-100 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Machines & Technologies Used</h2>
          <div className="mt-4 h-1 w-16 bg-red-700" />
          <p className="mt-5 max-w-3xl text-gray-600">
            Our products are manufactured using a wide range of press, laser, tube
            cutting and welding technologies under one roof.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {technologies.map((t, i) => (
              <div
                key={t.name}
                className="group border-b-4 border-transparent bg-white p-6 shadow-sm transition-colors hover:border-red-800"
              >
                <span className="flex h-10 w-10 items-center justify-center bg-red-800 font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-semibold text-gray-900">{t.name}</h3>
                <p className="mt-1 text-sm text-red-800">{t.spec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LIST OF MACHINES ============ */}
      <section id="list-of-machines" className="scroll-mt-16 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">List of Machines</h2>
          <div className="mt-4 h-1 w-16 bg-red-700" />
          <p className="mt-5 max-w-3xl text-gray-600">
            Detailed specifications of our press shop and other machines.
          </p>

          {/* tabs */}
          <div role="tablist" className="mt-8 flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={tab === t.id}
                onClick={() => setTab(t.id)}
                className={`px-5 py-2.5 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${
                  tab === t.id
                    ? "bg-red-800 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {t.label} <span className="opacity-70">({t.count})</span>
              </button>
            ))}
          </div>

          {/* table (scrolls sideways on small screens) */}
          <div className="mt-6 overflow-x-auto border border-gray-200 shadow-sm">
            {tab === "pneumatic" && <PressTable rows={pneumaticPresses} />}
            {tab === "hydraulic" && <PressTable rows={hydraulicPresses} />}
            {tab === "other" && <OtherTable rows={otherMachines} />}
          </div>
          <p className="mt-3 text-xs text-gray-500 sm:hidden">Swipe the table sideways to see all columns.</p>
          <p className="mt-3 text-xs text-gray-500">
            Pn = Pneumatic, Hyd = Hydraulic. Dimensions in mm, as per our company profile.
          </p>
        </div>
      </section>
    </>
  );
}