import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Layout } from "../layouts";
import { Home } from "@/pages/home";
import { ErrorPage } from "@/pages/error";
import { Fallback } from "@/shared/ui/fallback";

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
        element: (
          <Suspense fallback={<Fallback />}>
            <ArtworkItem />
          </Suspense>
        ),
      },
      {
        path: "/favorites",
        element: (
          <Suspense fallback={<Fallback />}>
            <Favorites />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
];

const router = createBrowserRouter(routes);

export function BrowserRouter() {
  return <RouterProvider router={router} />;
}
