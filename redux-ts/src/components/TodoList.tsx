import { FC, useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const TodoList: FC = () => {
  const { page, error, limit, loading, todos } = useTypedSelector((state) => state.todos);
  const { fetchTodos, setTodoPage } = useActions();
  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  if (loading) {
    return <h1>Идёт загрузка...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id} — {todo.title}
        </div>
      ))}
      <div style={{ display: 'flex', marginTop: '21px' }}>
        {pages.map((p) => (
          <div
            onClick={() => setTodoPage(p)}
            style={{ border: p === page ? '2px solid green' : '2px solid gray', padding: '10px', cursor: 'pointer' }}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
