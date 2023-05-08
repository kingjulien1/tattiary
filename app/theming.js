"use client"

import Icon from "@components/icon"
import classNames from "@utils/classnames"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

/**
 * apply from a list of predefined color themes
 */
const ThemePicker = () => <div className="dropdown dropdown-bottom dropdown-end dropdown-hover group" children={[<Button key="button" />, <Menu key="menu" />]} />

export default ThemePicker

/**
 * trigger to drop { @see Menu } list of color themes
 */
const Button = () => <label className="group-hover:bg-base-200" children={<Icon shape="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />} />

/**
 * list of applicable olor themes
 */
function Menu() {
  return (
    <div className="max-h-64 overflow-y-auto dropdown-content scrollbar-hide">
      <ul className="grid grid-cols-1 gap-2">
        <Themes />
      </ul>
    </div>
  )
}

function Themes() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <li className="px-2 py-1 text-center text-xs font-sans font-semibold" children="loading themes..." />

  return ["autumn", "pastel", "coffee", "emerald", "bumblebee", "luxury", "cyberpunk", "cupcake", "synthwave", "corporate", "retro", "valentine", "night", "halloween", "dracula", "forest"].map(theme => <li key={theme} children={<Theme key={theme} name={theme} />} />)
}

/**
 * applicable color theme { @param {string} name }
 */
function Theme({ name }) {
  const { setTheme, theme } = useTheme()

  return (
    <a onClick={() => setTheme(name)} className={classNames({ active: name === theme }, "flex flex-row justify-between rounded-md")}>
      <span className="text-xs capitalize font-sans font-semibold" children={name} />
      <Palette theme={name} />
    </a>
  )
}

/**
 * showcase theme { @see Theme } color set
 */
function Palette({ theme }) {
  return (
    <div data-theme={theme} className="py-1 px-2 flex flex-row gap-1 rounded bg-transparent">
      <div className="bg-base-100 w-2 h-4 rounded" />
      <div className="bg-secondary w-2 h-4 rounded" />
      <div className="bg-accent w-2 h-4 rounded" />
      <div className="bg-neutral w-2 h-4 rounded" />
    </div>
  )
}
