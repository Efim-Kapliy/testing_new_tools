import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import App from './App';
import routesConfig from './routesConfig';
import { renderWithRedux } from './tests/helpers/renderWithRedux';

describe('TEST APP', () => {
  test('Router test', async () => {
    const user = userEvent.setup();
    renderWithRedux(<App />);
    const mainLink = screen.getByTestId('main-link');
    const aboutLink = screen.getByTestId('about-link');
    await user.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
    await user.click(mainLink);
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });

  test('Error page test', async () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ['/asdfsdfa'],
    });
    render(<RouterProvider router={router} />);
    expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
  });
});
