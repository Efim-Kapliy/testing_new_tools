import Users from './components/users/Users';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import MainPage from './pages/MainPage';
import PageWrapper from './pages/PageWrapper';
import UserDetailsPage from './pages/UserDetailsPage';

const routesConfig = [
  {
    path: '/',
    element: <PageWrapper />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/users',
        element: <Users />,
      },
      {
        path: '/users/:id',
        element: <UserDetailsPage />,
      },
    ],
  },
];

export default routesConfig;
