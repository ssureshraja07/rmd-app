import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Our Products", to: "/products" },
  { label: "Our Infrastructure", to: "/infrastructure" },
  { label: "Contact Us", to: "/contact-us" },
];

const commitments = [
  "Supply of Quality Products",
  "On Time Delivery",
  "Manufacturing Process Improvements",
];

// TODO: replace "#" with real social page URLs
const socials = [
  {
    name: "Facebook",
    href: "#",
    path: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z",
  },
  {
    name: "LinkedIn",
    href: "#",
    path: "M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z",
  },
  {
    name: "Instagram",
    href: "#",
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919790135181",
    path: "M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.8h-.01a9.9 9.9 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.13 1.03 7 2.9a9.82 9.82 0 0 1 2.9 7c0 5.45-4.44 9.88-9.89 9.88zM20.5 3.5A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.44-8.41z",
  },
];

function Heading({ children }) {
  return (
    <h3 className="mb-5 inline-block border-b-2 border-red-700 pb-2 text-lg font-semibold text-white">
      {children}
    </h3>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="h-1 bg-red-800" />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {/* 1. Company overview */}
        <div>
          <Link to="/" className="mb-5 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center bg-red-800 text-sm font-extrabold text-white">
              RMD
            </span>
            <span className="text-lg font-bold text-white">
              RMD <span className="font-light text-gray-300">Industries</span>
            </span>
          </Link>
          <p className="mb-4 text-sm leading-relaxed">
            Working towards focusing on customer requirement and achieving total
            customer satisfaction through:
          </p>
          <ul className="space-y-2 text-sm">
            {commitments.map((c) => (
              <li key={c} className="flex items-start gap-2">
                <span className="mt-1.5 h-2 w-2 shrink-0 bg-red-700" />
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* 2. Quick links */}
        <div className="lg:pl-8">
          <Heading>Quick Links</Heading>
          <ul className="space-y-3 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="inline-block transition-all hover:translate-x-1 hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Social links */}
        <div>
          <Heading>Follow Us</Heading>
          <p className="mb-4 text-sm">Stay connected with us on social media.</p>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="flex h-10 w-10 items-center justify-center bg-gray-800 text-gray-300 transition-colors hover:bg-red-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* 4. Contact us */}
        <div>
          <Heading>Contact Us</Heading>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 fill-red-600">
                <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
              </svg>
              <address className="not-italic leading-relaxed">
                Survey No: 13/1A &amp; 1C, Behind Venugopala Swamy Temple,
                Anumepalli Agraharam, Zuzuvadi, Hosur - 635126
              </address>
            </li>
            <li className="flex gap-3">
              <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 fill-red-600">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <div className="flex flex-col break-all">
                <a href="mailto:rmdindus@gmail.com" className="hover:text-white">
                  rmdindus@gmail.com
                </a>
                <a href="mailto:rmdindustriesbd@gmail.com" className="hover:text-white">
                  rmdindustriesbd@gmail.com
                </a>
              </div>
            </li>
            <li className="flex gap-3">
              <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 fill-red-600">
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
              </svg>
              <div className="flex flex-col">
                <a href="tel:+919790135181" className="hover:text-white">
                  +91 97901 35181
                </a>
                <a href="tel:+917339216555" className="hover:text-white">
                  +91 73392 16555
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <p className="mx-auto max-w-7xl px-4 py-5 text-center text-sm text-gray-400 sm:px-6 lg:px-8">
          &copy; {new Date().getFullYear()} RMD Industries. All rights reserved.
        </p>
      </div>
    </footer>
  );
}