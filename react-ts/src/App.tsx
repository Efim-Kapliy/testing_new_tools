import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import UsersPage from './component/UsersPage';
import TodosPage from './component/TodosPage';
import WrapperPage from './component/WrapperPage';
import UserItemPage, { loader as fetchUser } from './component/UserItemPage';
import TodoItemPage from './component/TodoItemPage';
import ErrorBoundary from './component/ErrorBoundary';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <WrapperPage />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          path: '/users',
          element: <UsersPage />,
        },
        {
          path: '/users/:userId',
          element: <UserItemPage />,
          loader: fetchUser,
          errorElement: <ErrorBoundary />,
        },
        {
          path: '/todos',
          element: <TodosPage />,
        },
        {
          path: '/todos/:id',
          element: <TodoItemPage />,
          errorElement: <ErrorBoundary />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
