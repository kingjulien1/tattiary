import classNames from "@utils/classnames"

/**
 * apply from a list of predefined color themes
 */
const ThemePicker = () => <div className="dropdown -open dropdown-bottom dropdown-end dropdown-hover group" children={[<Button key="button" />, <Menu key="menu" />]} />

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
 * list of appliable color themes
 */
function Menu() {
  return (
    <ul tabIndex={0} className="p-2 w-48 space-y-2 dropdown-content menu menu-compact bg-base-200 rounded-box border-none hover:ring-2 hover:ring-neutral">
      {["autumn", "pastel", "luxury", "cyberpunk"].map((theme) => (
        <Theme key={theme} name={theme} />
      ))}
    </ul>
  )
}

/**
 *
 */
function Theme({ name }) {
  return (
    <button className="overflow-hidden rounded-lg" data-set-theme={name} data-act-class="[&amp;_svg]:visible">
      <div data-theme={name} className="grid grid-rows-2 bg-transparent text-inherit hover:text-base-content hover:bg-base-200">
        <div className="col-span-5 row-span-2 row-start-1 flex gap-2 py-2 px-4 justify-between">
          <span className="text-xs font-semibold" children={name} />
          <Palette />
        </div>
      </div>
    </button>
  )
}

/**
 * showcase theme color palette
 */
function Palette() {
  return (
    <div className="flex flex-shrink-0 flex-wrap gap-1 h-full">
      {["primary", "secondary", "accent"].map((color) => (
        <div className={classNames(`bg-${color}`, "w-2 rounded")} />
      ))}
    </div>
  )
}
