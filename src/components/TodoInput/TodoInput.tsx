import React, {ChangeEvent, FormEvent, FocusEvent} from 'react';

interface TodoInputProps {
  onNewTodoValue: (todo: string) => void;
}

export const TodoInput: React.FC<TodoInputProps> = (props: TodoInputProps): React.ReactElement => {
  const [todo, setTodo] = React.useState("");
  const [isValid, setIsValid] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState("");

  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    const newValue = e.target.value;
    setTodo(newValue);
  }

  const blurHandler = (e: FocusEvent<HTMLInputElement>): void => {
    const text = e.target.value;
    if (!text) {
      setIsValid(false);
      setErrorMessage("A To do value must be provided!")
    }
    else if (text === "Hello") {
      setIsValid(false);
      setErrorMessage("'Hello' is not a valid To Do action")
    }
    else {
      setIsValid(true);
      setErrorMessage("");
    }
  }

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    if (isValid) {
      props.onNewTodoValue(todo);
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <label>To do: </label>
      <input id={"todoInput"}
        type={"text"}
        value={todo}
        placeholder={"What do you need to do?"}
        onChange={changeHandler} 
        onBlur={blurHandler}
      />
      <div>{errorMessage}</div>
      <button type={"submit"}>Add To Do</button>
    </form>
  );
}