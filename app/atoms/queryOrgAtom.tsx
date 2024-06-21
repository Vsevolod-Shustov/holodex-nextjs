import { atom } from 'jotai';

export const queryOrgAtom = atom<string>("Hololive")

export const organizations = [
  { title: "All Vtubers", value: "All" },
  { title: "Independents", value: "Independents" },
  { title: "Hololive", value: "Hololive" },
  { title: "Phase Connect", value: "Phase Connect" },
]