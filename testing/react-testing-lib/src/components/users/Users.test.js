import { screen } from '@testing-library/react';
import axios from 'axios';
import userEvent from '@testing-library/user-event';

import renderWithRouter from '../../tests/helpers/renderWithRouter';

jest.mock('axios');

describe('USERS TEST', () => {
  let response;
  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
        },
        {
          id: 2,
          name: 'Ervin Howell',
          username: 'Antonette',
          email: 'Shanna@melissa.tv',
        },
        {
          id: 3,
          name: 'Clementine Bauch',
          username: 'Samantha',
          email: 'Nathan@yesenia.net',
        },
      ],
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('RENDER USERS', async () => {
    jest.mocked(axios.get).mockReturnValue(response);
    renderWithRouter('/users');
    const users = await screen.findAllByTestId('user-item');
    expect(users.length).toBe(3);
    expect(axios.get).toHaveBeenCalledTimes(1);
    // screen.debug();
  });

  test('redirect to details page', async () => {
    jest.mocked(axios.get).mockReturnValue(response);
    const event = userEvent.setup();
    renderWithRouter('/users');
    const users = await screen.findAllByTestId('user-item');
    expect(users.length).toBe(3);
    await event.click(users[0]);
    expect(screen.getByTestId('user-page')).toBeInTheDocument();
    // screen.debug();
  });
});
