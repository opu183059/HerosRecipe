import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import AuthProvider from "./providers/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";
import Erroorpage from "./components/Erroorpage";
import Recipe from "./components/Recipe";
import Blog from "./components/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Erroorpage></Erroorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/recipe/:id",
        element: (
          <PrivateRoute>
            <Recipe></Recipe>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
