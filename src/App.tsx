import React from 'react';
import _ from 'lodash';

import { TodoInput } from './components/TodoInput/TodoInput';
import { TodoList } from './components/TodoList/TodoList';

import { Todo, todoFactory } from './models/todo';

import './App.scss';

const App: React.FC = (): React.ReactElement => {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  const onNewTodoHandler = (todo: string): void => {
    const newTodos = [...todos, todoFactory(todo)];
    setTodos(newTodos);
  }

  const todoCompletedHandler = (id: string, completed: boolean): void => {
    const todo: Todo | undefined = _.find(todos, {id});

    if (todo) {
      const updatedTodo = {...todo, completed};
      const filtered = _.filter(todos, (t): boolean => t.id !== id);
      const updatedTodos = _.orderBy([...filtered, updatedTodo], ['id'], ['asc']);

      setTodos(updatedTodos);
    }
  } 

  return (
    <div className="App">
      <header className="App-header">
        <h3>To Do</h3>
      </header>
      <TodoInput onNewTodoValue={onNewTodoHandler}/>
      <TodoList todos={todos} onTodoCompleted={todoCompletedHandler}/>
    </div>
  );
}

export default App;
