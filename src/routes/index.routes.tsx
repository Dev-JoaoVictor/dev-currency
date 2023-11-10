import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { Layout } from '../components/layout'
import { NotFound } from "../pages/NotFound";

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
      {
        path: '*',
        element: <NotFound />
      }
    ],
  }
]);