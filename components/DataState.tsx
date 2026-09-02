import type { ReactNode } from "react"

type DataStateProps = {
  icon: string
  children: ReactNode
}

export default function DataState({ icon, children }: DataStateProps) {
  return (
    <div className="data-state">
      <i className={`fa-solid ${icon}`} aria-hidden="true"></i>
      <span>{children}</span>
    </div>
  )
}