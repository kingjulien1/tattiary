import Link from "next/link"
import ThemePicker from "./dropdown/theme"
import Navigation from "./dropdown/navigation"

/**
 * responsive navigation bar to be used on very top of root layout ({@link app/layout.js})
 */
export default function Navbar() {
  return (
    <nav className="navbar md:px-4">
      <div className="navbar-start" children={<Navigation />} />
      <div className="navbar-end" children={<ThemePicker />} />
    </nav>
  )
}

/**
 * center piece of navigation bar displaying service name
 * @todo append to / replace with logo
 */
const Brand = ({ children }) => <Link href="/" className="btn btn-ghost normal-case teuxt-lg font-medium" children={children} />
