import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/Home";
import { Layout } from '../components/Layout'
import { Details } from "../pages/Details";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/detail/:cripto',
        element: <Details />
      },
    ],
  }
]);