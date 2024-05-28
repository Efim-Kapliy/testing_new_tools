import { render } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import routesConfig from '../../routesConfig';

const renderWithRouter = (initialEntries = '/') => {
  const router = createMemoryRouter(routesConfig, {
    initialEntries: [initialEntries],
  });
  return render(<RouterProvider router={router} />);
};

export default renderWithRouter;
