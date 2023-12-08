import OrgSelectorDropdown from "@/app/components/OrgSelectorDropdown"

export default function Header() {
  return (
    <div className="Header flex px-4 py-1 bg-sky-500">
      <OrgSelectorDropdown></OrgSelectorDropdown>
    </div>
  )
}