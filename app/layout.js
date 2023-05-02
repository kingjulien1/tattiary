import Link from "next/link"
import "./globals.css"
import Navigation from "./navigation"
import ThemePicker from "./theming"
import Providers from "./providers"

export const metadata = {
  title: "tattiary",
  description: "Platform for tattoo artists & shops to announce residencies & guestspots",
}

export default function Root({ children }) {
  return (
    <html lang="en" data-theme="coffee">
      <body>
        <Providers>
          <Toolbar />
          <main className="h-screen mb-40" children={children} />
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

/**
 * navigation bar on very top of layout
 */
function Toolbar() {
  return (
    <div className="sticky top-0 z-30 py-2 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100">
      <nav className="py-2 md:px-4 navbar sticky">
        <div className="navbar-start" children={<Navigation />} />
        <div className="navbar-end" children={<ThemePicker />} />
      </nav>
    </div>
  )
}

/**
 * navigation & resource section on very end of layout
 */
function Footer() {
  return (
    <footer className="p-10 footer bg-base-200">
      <Logo />
      <Footer.Section title="Legal">
        <Footer.Link href="/terms" children="Terms of Service" />
        <Footer.Link href="/privacy-policy" children="Privacy Policy" />
        <Footer.Link href="/terms" children="Terms of Service" />
      </Footer.Section>
      <Footer.Section title="Company">
        <Footer.Link href="/about" children="About us" />
        <Footer.Link href="https://github.com/kingjulien1/tattiary" children="Repository" />
      </Footer.Section>
      <Footer.Section title="Support">
        <Footer.Link href="https://github.com/kingjulien1/tattiary/discussions/new?category=feedback" children="Feedback" />
        <Footer.Link href="/" children="Contact us" />
        <Footer.Link href="/faq" children="FAQ" />
      </Footer.Section>
    </footer>
  )
}

/**
 * brand logo with tatoo quote
 */
function Logo() {
  return (
    <div>
      <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current">
        <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z" />
      </svg>
      <div className="pt-4">
        <p className="mb-1 italic" children={`"My body is my journal, and my tattoos are my story."`} />
        <p className="text-xs" children="- Johnny Depp" />
      </div>
    </div>
  )
}

/**
 * combine related resources into groups of shared topic { @param {string} title }
 */
Footer.Section = ({ title, children }) => (
  <div>
    <span className="footer-title" children={title} />
    {children}
  </div>
)

/**
 * link to { @param {string} href }
 */
Footer.Link = ({ href, children }) => <Link href={href} className="link link-hover" children={children} />
