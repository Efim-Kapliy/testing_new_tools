import { useEffect } from 'react';
import './App.css';
import { useAppDispatch } from './hooks/useAppDispatch';
import { useAppSelector } from './hooks/useAppSelector';
import { fetchUsers } from './store/reducers/ActionCreators';
import PostContainer from './components/PostContainer';
import PostContainer2 from './components/PostContainer2';

function App() {
  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(fetchUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='App'>
      {/* {isLoading && <h1>Идёт загрузка...</h1>}
      {error && <h1>{error}</h1>}
      {!error && !isLoading && JSON.stringify(users, null, 2)} */}
      <div style={{ display: 'flex' }}>
        <PostContainer />
        <PostContainer2 />
      </div>
    </div>
  );
}

export default App;
