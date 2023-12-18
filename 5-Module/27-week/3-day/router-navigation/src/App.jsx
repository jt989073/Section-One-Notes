import { createBrowserRouter, RouterProvider, Outlet, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Stocks from './components/Stocks';
import Movies from './components/Movies';

function Layout() {
  return (
    <div className='app'>
      <h1>App Component</h1>
      <nav className="comp nav">
        <NavLink
          className={({ isActive }) => isActive ? 'purple' : ''}
          style={({ isActive }) => isActive ? { fontWeight: 'bold' } : {}}
          to='/'>
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) => isActive ? { fontWeight: 'bold' } : {}}
          className={({ isActive }) => isActive ? 'purple' : ''}
          to='/movies'>
          Movies
        </NavLink>
        <NavLink
          style={({ isActive }) => isActive ? { fontWeight: 'bold' } : {}}
          className={({ isActive }) => isActive ? 'purple' : ''}
          to='/stocks'>
          Stocks
        </NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'stocks',
        element: <Stocks />
      },
      {
        path: 'movies',
        element: <Movies />
      },
      {
        path: '/not-logged-in',
        element: <h1>You Must Be Logged In To Enter.</h1>
      },
      {
        path: '*',
        element: <h1>Page Not Found</h1>
      }
    ]
  }
]);

function App() {
  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
