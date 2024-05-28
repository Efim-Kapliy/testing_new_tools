import userEvent from '@testing-library/user-event';
import Counter from './Counter';
import { renderWithRedux } from '../../tests/helpers/renderWithRedux';
import { renderTestApp } from '../../tests/helpers/renderTestApp';

const { screen } = require('@testing-library/react');

describe('Counter test', () => {
  test('router', async () => {
    const event = userEvent.setup();
    // renderWithRedux(<Counter />, { counter: { value: 10 } });
    renderTestApp('/', {
      initialState: {
        counter: { value: 10 },
      },
    });

    const incrementBtn = screen.getByTestId('increment-btn');
    const decrementBtn = screen.getByTestId('decrement-btn');
    expect(screen.getByTestId('value-title')).toHaveTextContent(/^10$/);
    await event.click(incrementBtn);
    expect(screen.getByTestId('value-title')).toHaveTextContent(/^11$/);
    await event.click(decrementBtn);
    expect(screen.getByTestId('value-title')).toHaveTextContent(/^10$/);
  });
});
