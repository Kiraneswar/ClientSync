import { Link } from "react-router-dom"

export default function Login() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold">Login</h1>
      <p className="text-muted-foreground">Auth form goes here.</p>
      <div className="mt-2 text-sm">
        <span className="text-muted-foreground">No account?</span>{" "}
        <Link to="/register" className="underline">Register</Link>
      </div>
    </div>
  )
}
