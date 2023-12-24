import fruits from './mockData/fruits.json';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Navigation from './components/Navigation'
import FruitsIndex from './components/FruitsIndex'
import FruitForm from './components/FruitForm'
import FavoriteFruit from './components/FavoriteFruit'
import FruitShow from './components/FruitShow'
import SetFavoriteFruit from './components/SetFavoriteFruit'
import './index.css'

const Layout = () => {
  return (
    <>
      <Navigation />
      <h1>Welcome to Fruits App</h1>
      <Outlet />
    </>
  )
}


const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <FruitsIndex fruits={fruits}/>
      },
      {
        path: '/fruits/new',
        element: <FruitForm  fruits={fruits}/>
      },
      {
        path: '/fruits/:fruitId',
        element: <FruitShow  fruits={fruits}/>
      },
      {
        path: '/fav-fruit',
        element: <FavoriteFruit  fruits={fruits}/>
      },
      {
        path: '/set-fav-fruit',
        element: <SetFavoriteFruit  fruits={fruits}/>
      },
      {
        path: '*',
        element: <h2>Page Not Found</h2>
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
