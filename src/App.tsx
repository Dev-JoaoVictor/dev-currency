import { RouterProvider } from 'react-router-dom'
import { router } from "./routes/index.routes"

export function App() {
  return (
    <RouterProvider router={router} />
  )
}
