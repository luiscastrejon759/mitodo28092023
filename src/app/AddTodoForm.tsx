import React, { useState, ChangeEvent, FormEvent } from "react";

//import { AddTodo } from "./types";
type AddTodo = (newTodo: string) => void;
interface AddTodoFormProps {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form>
      <input type="text" value={newTodo} onChange={handleChange} />
      <button type="submit"style={{color:'black', fontSize:'20px', border:'0', borderRadius:'6px',backgroundColor: "#c6dff7"}}onClick={handleSubmit} >
        Agregar
      </button>
    </form>
  );
};
