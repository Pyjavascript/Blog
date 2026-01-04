import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import Aboutpage from './pages/Aboutpage'
import ArticleList from './pages/ArticlesList'
import Articlepage from './pages/Articlepage'
import Layout from './Layout'

const routes = [{
  path:'/',
  element:<Layout/>,
  children: [
  {
    path: '/',
    element: <Homepage />
  },
  {
    path: '/about',
    element: <Aboutpage />
  },
  {
    path: '/articles',
    element: <ArticleList />
  },
  {
    path: '/articles/individual',
    element: <Articlepage />
  }
]
}]
const router = createBrowserRouter(routes)

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
