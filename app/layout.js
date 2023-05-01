import "./globals.css"
import Navigation from "./navigation"
import ThemePicker from "./theming"

export const metadata = {
  title: "tattiary",
  description: "Platform for tattoo artists & shops to announce residencies & guestspots",
}

export default function RootLayout({ children }) {
  return (
    <html data-theme="bumblebee" lang="en">
      <body>
        <Navbar />
        <main className="h-screen">{children}</main>
      </body>
    </html>
  )
}

/**
 * responsive navigation bar to be used on very top of root layout ({@link app/layout.js})
 */
function Navbar() {
  return (
    <nav className="navbar md:px-4">
      <div className="navbar-start" children={<Navigation />} />
      <div className="navbar-end" children={<ThemePicker />} />
    </nav>
  )
}
