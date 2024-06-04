import Users from './components/users/Users';
import UsersForTest from './components/usersForTest/UsersForTest';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import HelloWorld from './pages/HelloWorld';
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
        path: '/users-test',
        element: <UsersForTest />,
      },
      {
        path: '/users/:id',
        element: <UserDetailsPage />,
      },
      {
        path: '/hello',
        element: <HelloWorld />,
      },
    ],
  },
];

export default routesConfig;
