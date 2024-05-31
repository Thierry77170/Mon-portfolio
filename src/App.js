// React-route-dom
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

// Components
import Root from './rooting/Root.jsx'
import Home  from './pages/home/Home.jsx'
import MesRealisations  from './pages/mesRealisations/MesRealisations.jsx'
import MonCv  from './pages/monCv/MonCv.jsx'

// Variable
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/mesRealisations',
        element: <MesRealisations />
      },
      {
        path: '/cv',
        element: <MonCv />
      },
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
