import { Task } from "../interfaces/Task";
import "./TaskItem.css";

interface TaskItemProps {
  task: Task;
  toggleCompletion: (id: number | string) => void; //funcion para manejar el estado.
  deleteTask : (id: number | string) => void;
}
export const TaskItem = ({ task, toggleCompletion,deleteTask }: TaskItemProps) => {
  const { title, description, completed, id } = task;
  const formattedDate = new Date(Number(id)).toLocaleDateString();
  return (
    <div>
      <div className="cardTask">
        <h3> Titulo: {title}</h3>
        <p> Descripción: {description}</p>
        <p>Fecha de creacion: {formattedDate}</p>
        <p>{completed ? "Completada" : "Pendiente"}</p>
        <button onClick={() => toggleCompletion(id)}>
          {completed ? "Desmarcar" : "Completar"}
        </button>
        <button className="delete" onClick={()=>deleteTask(id)}>Borrar </button>
      </div>
    </div>
  );
};
