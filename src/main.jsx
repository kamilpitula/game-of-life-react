import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShareKeyPage from "./components/Pages/ShareKeyPage/ShareKeyPage.jsx";
import GamePage from "./components/Pages/GamePage/GamePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <GamePage />,
      },
      {
        path: ":boardId",
        element: <GamePage />,
      },
      {
        path: "/share",
        element: <ShareKeyPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
