import { Link } from "react-router-dom"

export default function Clients() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Clients</h1>
        <Link to="/clients/add" className="underline">Add Client</Link>
      </div>
      <p className="text-muted-foreground">Table of clients goes here.</p>
    </div>
  )
}
