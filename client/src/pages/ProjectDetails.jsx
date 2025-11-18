import { useParams } from "react-router-dom"

export default function ProjectDetails() {
  const { id } = useParams()
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold">Project Details</h1>
      <p className="text-muted-foreground">Project ID: {id}</p>
    </div>
  )
}
