import "./globals.css"
import Navigation from "./navigation"
import ThemePicker from "./theming"

export const metadata = {
  title: "tattiary",
  description: "Platform for tattoo artists & shops to announce residencies & guestspots",
}

export default function Root({ children }) {
  return (
    <html lang="en" data-theme="autumn" className="m-0">
      <body className="h-screen">
        <nav className="py-2 md:px-4 navbar sticky">
          <div className="navbar-start" children={<Navigation />} />
          <div className="navbar-end" children={<ThemePicker />} />
        </nav>
        {children}
      </body>
    </html>
  )
}
