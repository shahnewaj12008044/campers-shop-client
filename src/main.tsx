import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { RouterProvider } from 'react-router-dom'


import { createBrowserRouter } from "react-router-dom"
import App from './App.tsx'
import { Home } from 'lucide-react'
import Products from './pages/Products/Products.tsx'
import ProductManagement from './pages/ProductManagement/ProductManagement.tsx'
import About from './pages/About/About.tsx'



const router = createBrowserRouter([
    {
        path: "/",
        element:<App></App>,
        children:[{
          path: "/",
          element: <Home />
      },
      {
          path: "/products",
          element: <Products />
      },
      
      {
          path: "/product-management",
          element: <ProductManagement />
      },
      {
          path: "/about",
          element: <About />
      }]
        
    },
   
])



createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <Provider store={store}>
    <RouterProvider router= {router}></RouterProvider>
   </Provider>
  </StrictMode>,
)
