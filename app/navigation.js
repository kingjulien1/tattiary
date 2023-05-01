import classNames from "@utils/classnames"
import Link from "next/link"
import links from "./links.json"

/**
 * main navigation solution linking most relevant resources
 */
export default function Navigation() {
  return <div className="dropdown dropdown-bottom dropdown-start dropdown-hover group transition-color ease-in-out duration-300" children={[<Button key="button" />, <Menu key="menu" />]} />
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
      {Object.keys(links).map((topic) => (
        <Group key={topic} topic={topic} />
      ))}
    </ul>
  )
}

/**
 * combine related resources into groups with headings describing mutual topic @param topic
 * @todo show resources based on authentication state
 * @todo select active item with router
 */
function Group({ topic }) {
  return (
    <>
      {topic !== "account" ? <li className="menu-title capitalize font-medium" children={<span children={topic} />} /> : null}
      {links[topic].map(({ isProtected, ...resource }) => (
        <li key={resource.name} className={classNames({ hidden: isProtected })} children={<Item {...resource} />} />
      ))}
    </>
  )
}

/**
 * menu item linking resource @param href location
 * @param bool isActive true if current- & resource location same
 */
const Item = ({ href, path, name, ...rest }) => <Link href={href} className="rounded-md" {...rest} children={[<Icon shape={path} />, name]} />

/**
 * creates uniformed svg icons with {@param path} shape
 * @param string svg path shape
 * @todo support multiple paths
 */
const Icon = ({ shape }) => <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" children={<path d={shape} />} />
