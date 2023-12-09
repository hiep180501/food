import React from "react";
import Login from "./component/Login";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { App } from "antd";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Login/> 
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
)