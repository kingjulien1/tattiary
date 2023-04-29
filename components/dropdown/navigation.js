import Link from "next/link"

/**
 * component to toggle / drop down navigation menu
 */
export default () => <div className="dropdown" children={[<Button />, <Menu />]} />

/**
 * trigger to drop down the {@link Menu} component when hovered
 */
function Button() {
  return (
    <label tabIndex={0} className="btn btn-square btn-ghost">
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
    <ul tabIndex={0} className="py-2 dropdown-content menu menu-compact shadow bg-base-100 rounded-box w-52">
      {Object.keys(groups).map((group) => (
        <Group key={group} name={group} />
      ))}
    </ul>
  )
}

/**
 * combine / associate related resources into groups with a title of the topic of relation
 * @todo show resources based on authentication state
 */
function Group({ name }) {
  return (
    <>
      <li className="menu-title" children={<span className="my-1 font-medium" children={name} />} />

      {groups[name].map((group) => (
        <Item {...group} isActive={group.name === "discover"} show={!group.isProtected} />
      ))}
    </>
  )
}

/**
 * group item linking to a resource
 */
function Item({ name, href, path, isActive, show }) {
  if (!show) return null

  return (
    <li>
      <Link href={href} className={isActive ? "active" : ""}>
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" children={<path d={path} />} />
        {name}
      </Link>
    </li>
  )
}

/**
 * resources, grouped by topic
 */
const groups = {
  tattoos: [
    {
      name: "artists & shops",
      href: "/find",
      path: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
    },
    {
      name: "discover",
      href: "/discover",
      path: "M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525",
    },
  ],
  account: [
    {
      name: "profile",
      href: "/profile",
      path: "M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z",
      isProtected: true,
    },
    {
      name: "settings",
      href: "/settings",
      path: "M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495",
      isProtected: true,
    },
    {
      name: "sign out",
      href: "/signout",
      path: "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9",
      isProtected: true,
    },
    {
      name: "sign in",
      href: "/signin",
      path: "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75",
    },
  ],
}
