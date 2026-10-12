import { Link } from "react-router-dom";

/* Reusing your existing images. Replace with new ones later. */
import bannerImg from "../images/about-hero.png";
import facilityImg from "../images/product1.png";

/* ------------------------------- data ------------------------------- */
const ADDRESS =
  "Survey No: 13/1A & 1C, Behind Venugopala Swamy Temple, Anumepalli Agraharam, Zuzuvadi, Hosur - 635126";

const mapQuery = encodeURIComponent(ADDRESS);
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
const MAP_EMBED = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

const WHATSAPP_TEXT = encodeURIComponent("Hello RMD Industries, I would like to make an enquiry.");

const people = [
  {
    name: "P Manikandan",
    role: "Managing Director",
    phoneLabel: "+91 97901 35181",
    phone: "919790135181",
    email: "md@rmdindus.com",
  },
  {
    name: "N Babu Kiran",
    role: "Head - Business Development / New Product Development",
    phoneLabel: "+91 98941 51396",
    phone: "919894151396",
    email: "npd@rmdindus.com",
  },
];

/* Same icon set as the footer */
const ICONS = {
  phone:
    "M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z",
  mail: "M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z",
  pin: "M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z",
  whatsapp:
    "M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.8h-.01a9.9 9.9 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.13 1.03 7 2.9a9.82 9.82 0 0 1 2.9 7c0 5.45-4.44 9.88-9.89 9.88zM20.5 3.5A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.44-8.41z",
  globe:
    "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm6.93 9h-3.05a15.6 15.6 0 0 0-1.38-5.02A8.03 8.03 0 0 1 18.93 11zM12 4.04c.83 1.2 1.48 2.53 1.91 4.96h-3.82C10.52 6.57 11.17 5.24 12 4.04zM4.26 13a7.9 7.9 0 0 1 0-2h3.38a16.5 16.5 0 0 0 0 2H4.26zm.81 2h3.05c.31 1.8.78 3.5 1.38 5.02A8.03 8.03 0 0 1 5.07 15zm3.05-6H5.07a8.03 8.03 0 0 1 4.43-5.02C8.9 5.5 8.43 7.2 8.12 9zM12 19.96c-.83-1.2-1.48-2.53-1.91-4.96h3.82c-.43 2.43-1.08 3.76-1.91 4.96zM14.34 13H9.66a14.7 14.7 0 0 1 0-2h4.68a14.7 14.7 0 0 1 0 2zm.16 7.02c.6-1.52 1.07-3.22 1.38-5.02h3.05a8.03 8.03 0 0 1-4.43 5.02zM16.36 13a16.5 16.5 0 0 0 0-2h3.38a7.9 7.9 0 0 1 0 2h-3.38z",
};

function Icon({ name, className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-current ${className}`} aria-hidden="true">
      <path d={ICONS[name]} />
    </svg>
  );
}

/* One icon style everywhere: white icon on dark-red square */
function IconBox({ name }) {
  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-red-800 text-white transition-colors group-hover:bg-red-700">
      <Icon name={name} className="h-6 w-6" />
    </span>
  );
}

const quickActions = [
  { icon: "phone", title: "Call Us", sub: "+91 97901 35181", href: "tel:+919790135181" },
  { icon: "mail", title: "Mail Us", sub: "md@rmdindus.com", href: "mailto:md@rmdindus.com" },
  { icon: "pin", title: "Locate Us", sub: "Hosur - 635126", href: MAP_LINK, external: true },
  {
    icon: "whatsapp",
    title: "WhatsApp Us",
    sub: "Chat with us",
    href: `https://wa.me/919790135181?text=${WHATSAPP_TEXT}`,
    external: true,
  },
];

/* small action button used inside the person cards */
function ActionLink({ href, icon, children, external }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="inline-flex items-center gap-2 border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 transition-colors hover:border-red-800 hover:bg-red-800 hover:text-white"
    >
      <Icon name={icon} className="h-4 w-4" />
      {children}
    </a>
  );
}

/* ------------------------------- page ------------------------------- */
export default function ContactUs() {
  return (
    <div className="bg-white text-gray-800">
      {/* ============ BANNER ============ */}
      <section className="relative">
        <img src={bannerImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-900/85 to-red-950/70" />
        <div className="relative mx-auto max-w-7xl px-4 pb-32 pt-24 sm:px-6 sm:pt-32 lg:px-8">
          <nav className="mb-4 text-sm text-gray-300" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2 text-red-500">/</span>
            <span className="text-white">Contact Us</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">Contact Us</h1>
          <div className="mt-5 h-1 w-20 bg-red-700" />
          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            For enquiries and quotations, reach out to our team. We will get back to
            you at the earliest.
          </p>
        </div>
      </section>

      {/* ============ QUICK ACTIONS ============ */}
      <div className="relative z-10 mx-auto -mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickActions.map((a) => (
            <a
              key={a.title}
              href={a.href}
              {...(a.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex items-center gap-4 border-b-4 border-red-800 bg-gray-900 p-5 shadow-xl transition-transform hover:-translate-y-1"
            >
              <IconBox name={a.icon} />
              <span className="min-w-0">
                <span className="block font-semibold text-white">{a.title}</span>
                <span className="block truncate text-sm text-gray-400">{a.sub}</span>
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* ============ CONTACT PERSONS ============ */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">For Enquiries Contact</h2>
          <div className="mt-4 h-1 w-16 bg-red-700" />

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {people.map((p) => (
              <article key={p.email} className="border border-gray-200 border-t-4 border-t-red-800 bg-white p-7 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-gray-900 text-xl font-bold text-white">
                    {p.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                    <p className="mt-1 text-sm text-red-800">{p.role}</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-gray-700">
                  <li className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-red-800 text-white">
                      <Icon name="phone" className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-xs text-gray-500">Mob No</span>
                      <a href={`tel:+${p.phone}`} className="font-medium hover:text-red-800">
                        {p.phoneLabel}
                      </a>
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-red-800 text-white">
                      <Icon name="mail" className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-gray-500">Mail</span>
                      <a href={`mailto:${p.email}`} className="break-all font-medium hover:text-red-800">
                        {p.email}
                      </a>
                    </span>
                  </li>
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  <ActionLink href={`tel:+${p.phone}`} icon="phone">Call</ActionLink>
                  <ActionLink href={`mailto:${p.email}`} icon="mail">Mail</ActionLink>
                  <ActionLink
                    href={`https://wa.me/${p.phone}?text=${WHATSAPP_TEXT}`}
                    icon="whatsapp"
                    external
                  >
                    WhatsApp
                  </ActionLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ADDRESS + MAP ============ */}
      <section className="bg-gray-100 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Find Us</h2>
          <div className="mt-4 h-1 w-16 bg-red-700" />

          <div className="mt-10 grid gap-8 lg:grid-cols-5">
            <div className="space-y-6 lg:col-span-2">
              <div className="group flex gap-4 border-l-4 border-red-800 bg-white p-6 shadow-sm">
                <IconBox name="pin" />
                <div>
                  <h3 className="font-semibold text-gray-900">Company Address</h3>
                  <address className="mt-2 text-sm not-italic leading-relaxed text-gray-600">
                    Survey No: 13/1A &amp; 1C, Behind Venugopala Swamy Temple,
                    Anumepalli Agraharam, Zuzuvadi, Hosur – 635126
                  </address>
                  <a
                    href={MAP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm font-semibold text-red-800 hover:underline"
                  >
                    Get directions →
                  </a>
                </div>
              </div>

              <div className="group flex gap-4 border-l-4 border-red-800 bg-white p-6 shadow-sm">
                <IconBox name="globe" />
                <div>
                  <h3 className="font-semibold text-gray-900">Website</h3>
                  <a
                    href="https://rmdindustries.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm text-gray-600 hover:text-red-800"
                  >
                    rmdindustries.in
                  </a>
                </div>
              </div>
            </div>

            <div className="overflow-hidden border-4 border-gray-200 bg-white shadow-sm lg:col-span-3">
              <iframe
                title="RMD Industries location"
                src={MAP_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-80 w-full sm:h-[420px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ FACILITY HIGHLIGHT ============ */}
      <section className="relative">
        <img src={facilityImg} alt="RMD Industries facility" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 to-red-950/85" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Visit our 15,000 sq.ft manufacturing facility
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            See our press, tube and laser lines, inspection lab and quality systems
            first hand. Call us to schedule a visit.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919790135181"
              className="inline-flex items-center gap-2 bg-red-800 px-8 py-3 font-semibold text-white transition-colors hover:bg-red-700"
            >
              <Icon name="phone" className="h-4 w-4" />
              Call Us
            </a>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gray-400 px-8 py-3 font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              <Icon name="pin" className="h-4 w-4" />
              Locate Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}