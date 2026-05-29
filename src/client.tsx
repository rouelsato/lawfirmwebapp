import React from "react";
import ReactDOM from "react-dom/client";
import { getRouter } from "./router";

const router = getRouter();

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    {router.dehydrate ? (
      <router.RouterProvider />
    ) : (
      <router.RouterProvider />
    )}
  </React.StrictMode>
);
