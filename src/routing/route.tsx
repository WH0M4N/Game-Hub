import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import GamesDetailPage from "../pages/GamesDetailPage";
import ErrorPage from "../pages/ErrorPage";

const route = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:id", element: <GamesDetailPage /> },
    ],
  },
]);

export default route;
