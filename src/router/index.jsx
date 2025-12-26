import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/layouts/Layout";
import TableVerifyPage from "../pages/TableVerifyPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      {path: 'table/:slug/:token', element:<TableVerifyPage />},
    ],

  },
]);


export default router;