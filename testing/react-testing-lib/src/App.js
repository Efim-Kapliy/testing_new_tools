/*
import { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState('');

  const onClick = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 100);
  }, []);
  return (
    <div>
      <h1 data-testid='value-elem'>{value}</h1>
      {toggle === true && <div data-testid='toggle-elem'>toggle</div>}
      {data && <div style={{ color: 'red' }}>data</div>}
      <h1>Hello world</h1>
      <button data-testid='toggle-btn' onClick={onClick}>
        Click me
      </button>
      <input onChange={(e) => setValue(e.target.value)} type='text' placeholder='input value' />
    </div>
  );
};

export default App;
*/

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routesConfig from './routesConfig';
import { Provider } from 'react-redux';
import { createReduxStore } from './store/store';

const router = createBrowserRouter(routesConfig);

const App = () => {
  return (
    <div id='rootElement'>
      <Provider store={createReduxStore()}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
};

export default App;
