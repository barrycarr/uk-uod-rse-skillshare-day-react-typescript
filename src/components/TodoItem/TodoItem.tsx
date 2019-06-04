import React, {ChangeEvent} from 'react';
import className from 'classnames';

import { Todo } from '../../models/todo';

import './TodoItem.scss';

interface TodoItemProps {
  todo: Todo;
  onCompleted: (id: string, completed: boolean) => void;
}

export const TodoItem: React.FC<TodoItemProps> = (props: TodoItemProps): React.ReactElement => {
  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    const completed = e.target.checked;
    props.onCompleted(props.todo.id, completed);
  }

  const cssClasses = className({
    'to-do-item-text': true,
    'to-do-item-text-completed': props.todo.completed,
  });

  return (
    <div className={"to-do-item"}>
      <span>
        <input type={"checkbox"}
          checked={props.todo.completed}
          onChange={changeHandler}
        />
      </span>
      <span className={cssClasses}>
        {props.todo.todo}
      </span>
    </div>  
  );
}