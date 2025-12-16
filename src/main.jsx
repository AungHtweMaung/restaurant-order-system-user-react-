import { createRoot } from 'react-dom/client'
import router from './router/index.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
