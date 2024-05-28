import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { createReduxStore } from '../../store/store';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import routesConfig from '../../routesConfig';

export const renderTestApp = (initialEntries = '/', options) => {
  const store = createReduxStore(options?.initialState);
  const router = createMemoryRouter(routesConfig, {
    initialEntries: [initialEntries],
  });

  return render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};
