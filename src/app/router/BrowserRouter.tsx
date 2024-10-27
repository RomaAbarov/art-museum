import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "../layouts";
import { Home } from "@/pages/home";
import { ErrorPage } from "@/pages/error";

const ArtworkItem = lazy(() => import("@/pages/artwork-item"));
const Favorites = lazy(() => import("@/pages/favorites"));

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/artwork/:idArtwork",
        element: <ArtworkItem />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
    errorElement: <ErrorPage />,
  },
];

const router = createBrowserRouter(routes);

export function BrowserRouter() {
  return <RouterProvider router={router} />;
}
