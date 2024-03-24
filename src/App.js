
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Create from './component/Create';
import Read from './component/Read';

const router = createBrowserRouter([
  {
    path: "/",
    element:(<Create/>),
  },
  {
    path: "/read",
    element:(<Read/>),
  },
]);

export default function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}


