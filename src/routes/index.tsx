import { createBrowserRouter } from "react-router-dom";

import Layout from "@/layout";
import HomeRoutes from "./HomeRoute";
import Page404 from "@/pages/Page404";

let routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Page404 />,
    children: HomeRoutes,
  },
]);

export default routes;
