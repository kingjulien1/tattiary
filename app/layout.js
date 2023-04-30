import Navbar from "@components/navbar"
import { themeChange } from "theme-change"

import "./globals.css"

export const metadata = {
  title: "tattiary",
  description: "Platform for tattoo artists & shops to announce residencies & guestspots",
}

export default function RootLayout({ children }) {
  return (
    <html data-theme="coffee" lang="en">
      <body>
        <Navbar />
        <main className="lg:p-4 h-screen">{children}</main>
      </body>
    </html>
  )
}

/**
 * main navigation menu linking most important resources
 */
function Menu() {
  return (
    <ul tabIndex={0} className="py-2 dropdown-content dropdown-open menu menu-compact shadow bg-base-100 rounded-box w-48">
      {Object.keys(groups).map((group) => (
        <Group key={group} name={group} />
      ))}
    </ul>
  )
}
