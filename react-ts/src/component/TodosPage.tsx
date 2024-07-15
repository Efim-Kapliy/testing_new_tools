import { FC, useEffect, useState } from 'react';
import List from './List';
import { ITodo } from '../types/types';
import TodoItem from './TodoItem';
import axios from 'axios';

const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=9');
      setTodos(response.data);
    } catch (e) {
      alert(e);
      throw e;
    }
  }

  return <List items={todos} renderItem={(todo: ITodo) => <TodoItem key={todo.id} todo={todo} />} />;
};

export default TodosPage;
