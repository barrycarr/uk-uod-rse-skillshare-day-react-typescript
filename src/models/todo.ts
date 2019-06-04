export interface Todo {
  id:   string;
  todo: string; 
  completed: boolean;
}

export function todoFactory(todo: string): Todo {
  const d = new Date();
  const id = d.getTime().toString();
  return { 
    id,
    todo, 
    completed: false
  };
}