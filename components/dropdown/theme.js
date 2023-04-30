"use client"

/**
 * manually apply custom color theme to layout
 */
export default function ThemePicker() {
  return <div className="dropdown dropdown-bottom dropdown-end" children={[<Button key={0} />, <Menu key={1} />]} />
}

/**
 * trigger to drop down the {@link Menu} component when hovered
 */
function Button() {
  return (
    <label tabIndex={0} className="btn btn-square btn-ghost">
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/svg">
        <path d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
      </svg>
    </label>
  )
}

/**
 * select one of a list of predifined themes to apply to layout
 */
function Menu() {
  const theme = document.querySelector("html").getAttribute("data-theme")
  console.log(theme)

  return (
    <ul tabIndex={0} className="w-52 py-2 dropdown-content menu menu-compact shadow bg-base-100 rounded-box bordered">
      <li className="menu-title" children={<span className="my-1 font-medium" children="light" />} />
      <Theme name="autumn" />
    </ul>
  )
}

/**
 * color theme as menu item - on selection apply this theme
 */
function Theme({ name }) {
  return (
    <li>
      <button children="autumn" onClick={() => document.querySelector("html").setAttribute("data-theme", name)} />
    </li>
  )
}
