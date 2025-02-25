import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Task } from "../interfaces/Task";
export const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { register, handleSubmit, reset } = useForm<Task>();

  const onSubmit: SubmitHandler<Task> = (data) => {
    if (!data.title.trim()) {
      alert("El titulo no puede estar vacio!");
      return;
    }

    const newTask: Task = {
      id: Date.now().toString(),
      title: data.title,
      description: data.description || undefined,
      completed: false,
    };

    setTasks([...tasks,newTask]);
    reset(); //limpia el formualrio
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Titulo</label>
        <input type="text" 
        placeholder="Titulo de la tarea"
        {...register ("title",{required:"Titulo obligatorio"})}/>
        <label htmlFor="">Description</label>
        <input type="text" placeholder="Descripcion"
        {...register("description")}/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
