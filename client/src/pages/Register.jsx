import { Link } from "react-router-dom"

export default function Register() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold">Register</h1>
      <p className="text-muted-foreground">Registration form goes here.</p>
      <div className="mt-2 text-sm">
        <span className="text-muted-foreground">Have an account?</span>{" "}
        <Link to="/login" className="underline">Login</Link>
      </div>
    </div>
  )
}
