import { ViteReactSSG } from 'vite-react-ssg'
import App from './App'
import Home from './pages/Home'
import Servicios from './pages/Servicios'
import Clientes from './pages/Clientes'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import './styles/index.css'

/* Árbol de rutas para vite-react-ssg: el SSG lo recorre para pre-renderizar
   un HTML real por cada ruta estática en build. App es el layout raíz
   (Navbar/Footer/transiciones) y las páginas se montan en su <Outlet />. */
export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'servicios', element: <Servicios /> },
      { path: 'clientes', element: <Clientes /> },
      { path: 'nosotros', element: <Nosotros /> },
      { path: 'contacto', element: <Contacto /> },
      // Fallback en cliente para deep-links desconocidos (no se pre-renderiza).
      { path: '*', element: <Home /> },
    ],
  },
]

export const createRoot = ViteReactSSG({ routes })
