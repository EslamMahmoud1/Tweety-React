import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/Auth/Login/LoginPage.jsx";
import RegisterPage from "./Pages/Auth/Register/RegisterPage.jsx";
import Landing from "./Pages/Landing/LandingPage.jsx";
import App from "./App.jsx";
import ContactUs from "./Pages/ContactUs/ContactUsPage.jsx";
import AuthIndex from "./Pages/Auth/Index.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Landing /> },
      {
        path: "/ContactUs",
        element: <ContactUs />,
      },
    ],
  },
  {
    element: <AuthIndex />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />,
);
