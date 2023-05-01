import classNames from "@utils/classnames"
import Link from "next/link"
import resources from "./links.json"

/**
 * refer to most relevant resources
 */
const Navigation = () => <div className="dropdown dropdown-bottom dropdown-start dropdown-hover group transition-color ease-in-out duration-300" children={[<Button key="button" />, <Menu key="menu" />]} />

export default Navigation

/**
 * trigger to drop { @see Menu } list of resources
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
 * list of accessible resources { @see resources data source }
 */
function Menu() {
  return (
    <ul tabIndex={0} className="w-52 p-2 space-y-2 rounded-box border-none dropdown-content menu menu-compact bg-base-200 hover:ring-2 hover:ring-neutral">
      {Object.keys(resources).map((topic) => (
        <Group key={topic} topic={topic} />
      ))}
    </ul>
  )
}

/**
 * combine related resources into groups of shared { @param {string} topic } topic
 *
 * @todo show resources based on authentication state
 * @todo select active item with router
 */
function Group({ topic }) {
  return (
    <>
      {topic !== "account" ? <li className="menu-title capitalize font-medium" children={<span children={topic} />} /> : null}
      {resources[topic].map(({ isProtected, ...resource }) => (
        <li key={resource.name} className={classNames({ hidden: isProtected })} children={<Item {...resource} />} />
      ))}
    </>
  )
}

/**
 * describe resource & link { @param {string} location } location
 *
 * @param {bool} isActive true when @param {string} location is same as router location state
 */
const Item = ({ name, location, icon, ...rest }) => <Link href={location} className="rounded-md" {...rest} children={[<Icon shape={icon} />, name]} />

/**
 * creates uniformed svg icons by wrapping a given { @param {string} shape } shape
 *
 * @todo support multiple paths
 */
const Icon = ({ shape }) => <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" children={<path d={shape} />} />
