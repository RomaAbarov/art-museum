import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "../layouts";
import { Home } from "@/pages/home";
import { ArtworkItem } from "@/pages/artwork-item";
import { Favorites } from "@/pages/favorites";
import { ErrorPage } from "@/pages/error";

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
