'use client'

import Dropdown from "@/app/ui/Dropdown";
import { useAtom } from "jotai";

import { queryOrgAtom } from "@/app/atoms/queryOrgAtom";
import { organizations } from "@/app/atoms/queryOrgAtom";

export default function OrgSelectorDropdown() {
  const [org, setOrg] = useAtom(queryOrgAtom)
  return (
    <Dropdown title={org} closeOnInsideClick={true}>
      <div className="rounded bg-slate-900 py-1 w-max">
        <ul>
          {organizations.map((item) => (
            <li className="hover:bg-slate-500 py-1 px-4 cursor-pointer"
              onClick={() => { console.log(item.value); setOrg(item.value) }}
              key={item.value}
            >
              {item.title}
            </li>))}
        </ul>
      </div>
    </Dropdown>
  )
}