import { screen } from '@testing-library/react';
import renderWithRouter from '../../tests/helpers/renderWithRouter';
import userEvent from '@testing-library/user-event';
import { renderTestApp } from '../../tests/helpers/renderTestApp';

describe('USERS TEST', () => {
  test('about link', async () => {
    const event = userEvent.setup();
    // renderWithRouter();
    renderTestApp();
    const aboutLink = screen.getByTestId('about-link');
    await event.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
    // screen.debug();
  });

  test('users link', async () => {
    const event = userEvent.setup();
    // renderWithRouter();
    renderTestApp();
    const usersLink = screen.getByTestId('users-link');
    await event.click(usersLink);
    expect(screen.getByTestId('users-page')).toBeInTheDocument();
    // screen.debug();
  });

  test('main link', async () => {
    const event = userEvent.setup();
    // renderWithRouter();
    renderTestApp();
    const mainLink = screen.getByTestId('main-link');
    await event.click(mainLink);
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
    // screen.debug();
  });
});
