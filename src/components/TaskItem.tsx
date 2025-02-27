import { Task } from "../interfaces/Task";
import "./TaskItem.css";

interface TaskItemProps {
  task: Task;
  toggleCompletion: (id: number | string) => void; //funcion para manejar el estado.
}
export const TaskItem = ({ task, toggleCompletion }: TaskItemProps) => {
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
          {completed ? "Desmarcar" : "Marcar como completada"}
        </button>
        <button className="delete">Borrar </button>
      </div>
    </div>
  );
};
