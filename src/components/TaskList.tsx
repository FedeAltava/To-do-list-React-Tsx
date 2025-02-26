import { useState } from "react";
import "./TaskList.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { Task } from "../interfaces/Task";
import { TaskItem } from "./TaskItem";
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

    setTasks([...tasks, newTask]);
    reset(); //limpia el formualrio
  };

  return (
    <div>
      <h1>ToDo-list</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="title">
          <label htmlFor="">Titulo</label>
          <input
            type="text"
            placeholder="Titulo de la tarea"
            {...register("title", { required: "Titulo obligatorio" })}
          />
        </div>
        <div className="description">
          <label htmlFor="">Descripción</label>
          <input
            type="text-area"
            placeholder="Descripcion"
            {...register("description")}
          />
        </div>
        <div className="buttonDiv">
          <button type="submit">Agregar</button>
        </div>
      </form>

      <div>
        {tasks.map((task: Task) => {
          return <TaskItem task={task} key={task.id} />;
        })}
      </div>
    </div>
  );
};
