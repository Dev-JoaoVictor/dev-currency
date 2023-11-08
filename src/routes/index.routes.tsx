import { createBrowserRouter } from "react-router-dom";

import { Layout } from '../components/layout'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
    ],
  }
]);