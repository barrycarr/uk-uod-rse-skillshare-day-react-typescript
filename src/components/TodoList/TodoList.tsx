import React from 'react';
import _ from 'lodash';

import { Todo } from '../../models/todo';
import { TodoItem } from '../TodoItem/TodoItem';

import './TodoList.scss';

interface TodoListProps {
  todos: Todo[];
  onTodoCompleted: (id: string, completed: boolean) => void;
}

export const TodoList: React.FC<TodoListProps> = (props: TodoListProps): React.ReactElement => {
  const items: React.ReactNode = _.map(props.todos, (td: Todo): React.ReactNode => (
    <TodoItem key={td.id} todo={td} onCompleted={props.onTodoCompleted}/>
  )); 

  return (
    <div className={"grid-container"}>
      {items}
    </div>
  );
}