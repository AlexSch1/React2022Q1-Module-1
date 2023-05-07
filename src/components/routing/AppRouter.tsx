import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Apartments } from '../../features/Apartments/Apartments';
import { NotFound } from '../../pages/NotFound/NotFound';
import { AboutUs } from '../../pages/AboutUs/AboutUs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Apartments></Apartments>,
    errorElement: <NotFound></NotFound>,
  },
  {
    path: 'about-us',
    element: <AboutUs />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
