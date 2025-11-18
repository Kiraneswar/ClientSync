import { Link } from "react-router-dom"

export default function Projects() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Projects</h1>
        <Link to="/projects/add" className="underline">Add Project</Link>
      </div>
      <p className="text-muted-foreground">Projects table goes here.</p>
    </div>
  )
}
