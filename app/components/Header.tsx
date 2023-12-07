'use client'
import { atom, useAtom } from "jotai"
import Dropdown from "@/app/components/Dropdown"
//import { queryOrg } from "./Home"

const queryOrg = atom<string>("Hololive")

const items = [
  { title: "All Vtubers", value: "All" },
  { title: "Independents", value: "Independents" },
  { title: "Hololive", value: "Hololive" },
  { title: "Nijisanji", value: "Nijisanji" },
]



export default function Header() {
  const [org, setOrg] = useAtom(queryOrg)
  return (
    <div className="Header flex px-4 py-1 bg-sky-500">
      <Dropdown title={org} closeOnInsideClick={true}>
        <div className="rounded bg-slate-900 py-1 w-max">
          <ul>
            {items.map((item) => (
              <li className="hover:bg-slate-500 py-1 px-4 cursor-pointer"
                onClick={() => { console.log(item.value); setOrg(item.value) }}
              >
                {item.title}
              </li>))}
          </ul>
        </div>
      </Dropdown>
    </div>
  )
}