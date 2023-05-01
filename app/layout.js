import "./globals.css"
import Navigation from "./navigation"
import ThemePicker from "./theming"

export const metadata = {
  title: "tattiary",
  description: "Platform for tattoo artists & shops to announce residencies & guestspots",
}

export default function RootLayout({ children }) {
  return (
    <html data-theme="retro" lang="en">
      <body>
        <nav className="navbar md:px-4">
          <div className="navbar-start" children={<Navigation />} />
          <div className="navbar-end" children={<ThemePicker />} />
        </nav>
        <main className="h-screen">{children}</main>
      </body>
    </html>
  )
}
