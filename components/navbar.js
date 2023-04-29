import Link from "next/link"
import ThemePicker from "./dropdown/theme"
import Navigation from "./dropdown/navigation"

/**
 * responsive navigation bar to be used on very top of root layout ({@link app/layout.js})
 */
export default function Navbar() {
  return (
    <nav className="navbar md:px-4 lg:px-8">
      <div className="navbar-start" children={<Navigation />} />
      <div className="navbar-center font-xs" children={<Link className="btn btn-ghost normal-case text-lg font-medium" href="/" children="tttiary.com" />} />
      <div className="navbar-end" children={<ThemePicker />} />
    </nav>
  )
}
