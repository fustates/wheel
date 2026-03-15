import { createBrowserRouter } from "react-router";
import { lazy } from "react";

const Layout = lazy(() => import("@/layout/index"));

const HomePage = lazy(() => import("@/view/home/index"));
const AboutPage = lazy(() => import("@/view/about/index"));

const NotFoundPage = lazy(() => import("@/view/error/404"));

const base = process.env.GITHUB_ACTIONS === "true" ? "/wheel/" : "/";

const router = createBrowserRouter([
  {
    path: base,
    element: <Layout />,
    children: [
      {
        path: base,
        element: <HomePage />,
      },
      {
        path: `${base}about`,
        element: <AboutPage />,
      },
    ],
  },
  {
    path: `${base}*`,
    element: <NotFoundPage />,
  },
]);

export default router;
