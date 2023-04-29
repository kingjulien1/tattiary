import { Navbar } from "@/components/navbar"
import "./globals.css"

export const metadata = {
  title: "tattiary",
  description: "Platform for tattoo artists & shops to announce residencies & guestspots",
}

export default function RootLayout({ children }) {
  return (
    <html data-theme="valentine" lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
