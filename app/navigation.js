import classNames from "@utils/classnames"
import Link from "next/link"
import links from "./links.json"

/**
 * main navigation solution linking most relevant resources
 */
export default function Navigation() {
  return <div className="dropdown dropdown-bottom dropdown-start dropdown-hover group" children={[<Button key="button" />, <Menu key="menu" />]} />
}

/**
 * trigger to drop down {@link Menu} menu
 */
function Button() {
  return (
    <label tabIndex={0} className="btn btn-square btn-ghost mb-2 group-hover:bg-base-200 hover:ring-2 hover:ring-neutral">
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
      </svg>
    </label>
  )
}

/**
 * main navigation menu linking most important resources
 */
function Menu() {
  return (
    <ul tabIndex={0} className="w-52 p-2 space-y-2 rounded-box border-none dropdown-content menu menu-compact bg-base-200 hover:ring-2 hover:ring-neutral">
      {Object.keys(links).map((group) => (
        <Group key={group} name={group} />
      ))}
    </ul>
  )
}

/**
 * combine related resources into groups with headings describing relation topic
 * @todo show resources based on authentication state
 * @todo select active item with router
 */
export function Group({ name }) {
  return (
    <>
      {name !== "account" ? <li className="menu-title capitalize font-medium" children={<span children={name} />} /> : null}
      {links[name].map((group) => (!group.isProtected ? <li key={group} children={<Item {...group} isActive={group.name === "About"} />} /> : null))}
    </>
  )
}

/**
 * linked resource
 */
export function Item({ className, name, href, path, isActive }) {
  return (
    <Link href={href} className={classNames("rounded-md", className, { active: isActive })}>
      <svg className="h-4 w-4 hover:rotate-45" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" children={<path d={path} />} />
      {name}
    </Link>
  )
}
