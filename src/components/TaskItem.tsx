import { Task } from "../interfaces/Task";
import "./TaskItem.css"
export const TaskItem =({ task }: { task: Task })=>{
    const { title, description, completed, id } = task;
    const formattedDate = new Date(Number(id)).toLocaleDateString();
    return(
        <div>
            <div className="cardTask">
                <h3> Titulo: {title}</h3>
                <p> Descripción: {description}</p>
                {completed && <p>Completada</p>}
                <p>Fecha de creacion: {formattedDate}</p>
            </div>
        </div>
    )
}