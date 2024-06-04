// import { render, screen, fireEvent } from '@testing-library/react';
// // Более полно эмулирует поведение пользователя, чем
// import userEvent from '@testing-library/user-event';
// import App from './App';

// describe('Test app', () => {
//   test('renders learn react link', () => {
//     render(<App />);
//     const helloWorldElem = screen.getByText(/hello world/i);
//     const btn = screen.getByRole('button');
//     const input = screen.getByPlaceholderText(/input value/i);
//     //Проверяем, что элемент появился в нашем DOM-дереве
//     expect(helloWorldElem).toBeInTheDocument();
//     expect(btn).toBeInTheDocument();
//     expect(input).toBeInTheDocument();
//     expect(input).toMatchSnapshot();
//   });

//   test('RENDERS SECOND', async () => {
//     render(<App />);
//     // const helloWorldElem = screen.queryByText(/hello world2/i);
//     // expect(helloWorldElem).toBeNull();
//     const helloWorldElem = await screen.findByText(/data/i);
//     expect(helloWorldElem).toBeInTheDocument();
//     // screen.debug();
//     expect(helloWorldElem).toHaveStyle({ color: 'red' });
//   });

//   test('CLICK EVENT', () => {
//     render(<App />);
//     const btn = screen.getByTestId('toggle-btn');
//     expect(screen.queryByTestId('toggle-elem')).toBeNull();
//     fireEvent.click(btn);
//     expect(screen.getByTestId('toggle-elem')).toBeInTheDocument();
//     fireEvent.click(btn);
//     expect(screen.queryByTestId('toggle-elem')).toBeNull();
//   });

//   test('INPUT EVENT', async () => {
//     const event = userEvent.setup();

//     render(<App />);
//     const input = screen.getByPlaceholderText(/input value/i);
//     expect(screen.queryByTestId('value-elem')).toContainHTML('');
//     // Искусственное событие
//     // fireEvent.input(input, {
//     //   target: { value: '369' },
//     // });
//     // Также искусственное событие
//     await event.type(input, '369');
//     expect(screen.getByTestId('value-elem')).toContainHTML('369');
//   });
// });
