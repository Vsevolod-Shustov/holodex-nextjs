'use client'

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Dropdown from "@/app/ui/Dropdown";

const items = [
  { title: "All Vtubers", value: "All" },
  { title: "Independents", value: "Independents" },
  { title: "Hololive", value: "Hololive" },
  { title: "Nijisanji", value: "Nijisanji" },
]

const queryOrg = "Hololive"

export default function OrgSelectorDropdown() {
  const [org, setOrg] = useState(queryOrg)
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    mounted ? createPortal(
      <Dropdown title={org} closeOnInsideClick={true}>
        <div className="rounded bg-slate-900 py-1 w-max">
          <ul>
            {items.map((item) => (
              <li className="hover:bg-slate-500 py-1 px-4 cursor-pointer"
                onClick={() => { console.log(item.value); setOrg(item.value) }}
                key={item.value}
              >
                {item.title}
              </li>))}
          </ul>
        </div>
      </Dropdown>
      , document.getElementById("orgSelectorDropdownEl"))
      : null
  )
}