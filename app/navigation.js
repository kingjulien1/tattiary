import Dropdown from "@components/dropdown"
import Icon from "@components/icon"
import classNames from "@utils/classnames"
import Link from "next/link"
import resources from "./links.json"

export default function Navigation() {
  return (
    <Dropdown className="dropdown-bottom dropdown-start">
      <Dropdown.Button children={<Icon shape="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />} />
      <Dropdown.Menu>
        {Object.keys(resources).map(topic => (
          <>
            <Dropdown.Menu.Title children={topic} />
            {resources[topic].map(({ name, location, icon, isProtected }) => (
              <li key={name} className={classNames({ hidden: isProtected })}>
                <Link href={location} className="rounded-md" children={[<Icon shape={icon} />, name]} />
              </li>
            ))}
          </>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}
