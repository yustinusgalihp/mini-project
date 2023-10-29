import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom"

import LandingPage from "../pages/landingPage"
import PageDetail from "@/pages/pageDetail";
import PageOpenAi from "@/pages/pageOpenAI";

export default function Router() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/product/:id",
      element: <PageDetail/>,
    },
    {
      path: "/openai",
      element : <PageOpenAi/>,
    },
    {
      path: "*",
      element: <div>404 page not found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}
