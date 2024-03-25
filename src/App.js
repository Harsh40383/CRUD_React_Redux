
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Create from './component/Create';
import Read from './component/Read';
import Update from './component/Update';

const router = createBrowserRouter([
  {
    path: "/",
    element:(<Create/>),
  },
  {
    path: "/read",
    element:(<Read/>),
  },
  {
    path: "/edit/:id",
    element:(<Update/>),
  },
]);

export default function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}


