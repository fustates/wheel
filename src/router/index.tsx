import { createBrowserRouter } from "react-router";
import { lazy } from "react";

const Layout = lazy(() => import("@/layout/index"));

const HomePage = lazy(() => import("@/view/home/index"));
const AboutPage = lazy(() => import("@/view/about/index"));

const NotFoundPage = lazy(() => import("@/view/error/404"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;