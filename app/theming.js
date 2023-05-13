"use client"

import classNames from "@utils/classnames"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const themes = ["autumn", "pastel", "coffee", "emerald", "bumblebee", "luxury", "cyberpunk", "cupcake", "synthwave", "corporate", "retro", "valentine", "night", "halloween", "dracula", "forest"]
/**
 * theme picker menu
 */
export default function Themes() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className="p-2 text-center text-xs font-sans font-semibold" children="loading themes..." />

  return (
    <ul className="grid grid-cols-1 gap-2">
      {themes.map(name => (
        <li key={name}>
          <a onClick={() => setTheme(name)} className={classNames({ active: name === theme }, "flex flex-row justify-between rounded-md")}>
            <span className="text-xs capitalize font-sans font-semibold" children={name} />
            <div data-theme={name} className="py-1 px-2 flex flex-row gap-1 rounded bg-transparent">
              <div className="bg-base-100 w-2 h-4 rounded" />
              <div className="bg-secondary w-2 h-4 rounded" />
              <div className="bg-accent w-2 h-4 rounded" />
              <div className="bg-neutral w-2 h-4 rounded" />
            </div>
          </a>
        </li>
      ))}
    </ul>
  )
}
