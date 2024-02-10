export default interface Todo {
  id: number;
  username: string;
  description: string;
  targetDate: string;
  done: boolean;
}

export interface NewTodo {
  username: string;
  description: string;
  targetDate: string;
  done: boolean;
}
