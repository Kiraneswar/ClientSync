import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Clients from "./pages/Clients"
import ClientDetails from "./pages/ClientDetails"
import AddClient from "./pages/AddClient"
import Projects from "./pages/Projects"
import ProjectDetails from "./pages/ProjectDetails"
import AddProject from "./pages/AddProject"
import Invoices from "./pages/Invoices"
import InvoiceDetails from "./pages/InvoiceDetails"
// import Login from "./pages/Login"
// import Register from "./pages/Register"
import Settings from "./pages/Settings"
import AuthPage from "./pages/Auth"
import "./App.css"
import DashboardLayout from "./layouts/DashboardLayout"
const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "clients", element: <Clients /> },
      { path: "clients/add", element: <AddClient /> },
      { path: "clients/:id", element: <ClientDetails /> },
      { path: "projects", element: <Projects /> },
      { path: "projects/add", element: <AddProject /> },
      { path: "projects/:id", element: <ProjectDetails /> },
      { path: "invoices", element: <Invoices /> },
      { path: "invoices/:id", element: <InvoiceDetails /> },
      { path: "settings", element: <Settings /> },
    ],
  },
  { path: "*", element: <Navigate to="/" replace /> },
])

export default function App() {
  return <RouterProvider router={router} />
}
