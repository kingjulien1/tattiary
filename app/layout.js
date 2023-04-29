import Navbar from "@components/navbar"
import { themeChange } from "theme-change"

import "./globals.css"

export const metadata = {
  title: "tattiary",
  description: "Platform for tattoo artists & shops to announce residencies & guestspots",
}

export default function RootLayout({ children }) {
  return (
    <html data-theme="pastel" lang="en">
      <body>
        <Navbar />
        <main className="lg:p-4 h-screen">{children}</main>
      </body>
    </html>
  )
}
