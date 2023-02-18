import Home from '@pages/home'
import Education from '@pages/education'
import Experience from '@pages/experience'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/education',
    element: <Education />,
  },
  {
    path: '/experience',
    element: <Experience />,
  },
])

export default router