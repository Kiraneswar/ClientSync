import { useParams } from "react-router-dom"

export default function ClientDetails() {
  const { id } = useParams()
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold">Client Details</h1>
      <p className="text-muted-foreground">Client ID: {id}</p>
    </div>
  )
}
