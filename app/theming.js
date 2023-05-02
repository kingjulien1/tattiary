import classNames from "@utils/classnames"

/**
 * apply from a list of predefined color themes
 */
const ThemePicker = () => <div className="dropdown dropdown-bottom dropdown-end dropdown-hover group grid" children={[<Button key="button" />, <Menu key="menu" />]} />

export default ThemePicker

/**
 * trigger to drop { @see Menu } list of color themes
 */
function Button() {
  return (
    <label tabIndex={0} className="btn btn-square btn-ghost mb-2 group-hover:bg-base-200 hover:ring-2 hover:ring-neutral">
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/svg">
        <path d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
      </svg>
    </label>
  )
}

/**
 * list of applicable olor themes
 */
function Menu() {
  return (
    <ul className="w-52 p-2 space-y-2 rounded-box border-none dropdown-content menu menu-compact bg-base-200 hover:ring-2 hover:ring-neutral">
      {["autumn", "pastel", "luxury", "cyberpunk"].map((theme) => (
        <li key={theme} children={<Theme key={theme} name={theme} />} />
      ))}
    </ul>
  )
}

/**
 * applicable color theme { @param {string} name }
 */
function Theme({ name }) {
  return (
    <div className="overflow-hidden rounded-box w-full">
      <span className="text-xs capitalize font-sans font-semibold" children={name} />
      <Palette theme={name} />
    </div>
  )
}

/**
 * showcase theme { @see Theme } color set
 */
function Palette({ theme }) {
  const backgrounds = Array.from(["primary", "secondary", "accent", "neutral"], (color) => `bg-${color}`)
  return (
    <div data-theme={theme} className="flex flex-row gap-1 rounded py-1 px-2 bg-transparent">
      {backgrounds.map((background) => (
        <div key={background} className={classNames(background, "h-4 w-2 rounded")} />
      ))}
    </div>
  )
}
/**
 *
      {["primary", "secondary", "accent", "neutral"].map((color) => (
        <div key={color} className={classNames(`bg-${color}`, "h-4 w-2 rounded")} />
      ))}
 */
