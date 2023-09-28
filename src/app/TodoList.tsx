import React from "react";
//import { Todo, ToggleComplete } from "./types";
import { TodoListItem } from "./TodoListItem";

type Todo = {
    text: string;
    complete: boolean;
  };

interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleComplete
}) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoListItem
          key={todo.text}
          todo={todo}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
};
