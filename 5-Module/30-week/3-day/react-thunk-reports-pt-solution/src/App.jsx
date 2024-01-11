import { createBrowserRouter, RouterProvider, NavLink, Outlet } from 'react-router-dom';
import ReportsIndex from './components/ReportsIndex';
import CreateReportForm from './components/CreateReportForm';
import EditReportForm from './components/EditReportForm';
import ReportShow from './components/ReportShow';

function Layout() {
  return (
    <>
      <NavLink to={'/'}>
        <h1>Progress Tracker Lite</h1>
      </NavLink>
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ReportsIndex />
      },
      {
        path: "reports/new",
        element: <CreateReportForm />
      },
      {
        path: "reports/:reportId",
        element: <ReportShow />
      },
      {
        path: "reports/:reportId/edit",
        element: <EditReportForm />
      }
    ]
  }
]);

const App = () => <RouterProvider router={router} />;

export default App;
