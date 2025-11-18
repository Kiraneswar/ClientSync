import { useParams } from "react-router-dom"

export default function InvoiceDetails() {
  const { id } = useParams()
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold">Invoice Details</h1>
      <p className="text-muted-foreground">Invoice ID: {id}</p>
    </div>
  )
}
