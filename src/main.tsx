import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { RouterProvider } from "react-router-dom";

import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";

import Products from "./pages/Products/Products.tsx";
import ProductManagement from "./pages/ProductManagement/ProductManagement.tsx";
import About from "./pages/About/About.tsx";
import Home from "./pages/Home/Home.tsx";
import ErrorPage from "./components/shared/ErrorPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },

      {
        path: "/product-management",
        element: <ProductManagement />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/error",
        element:<ErrorPage></ErrorPage>,
      },
    ],
  },
]);


  
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
