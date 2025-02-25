import { Task } from "../interfaces/Task";
export const TaskItem =({ task }: { task: Task })=>{
    const { title, description, completed, id } = task;
    return(
        <div>
            <div className="cardTask">
                <h1>{title}</h1>
                <p>{description}</p>
                {completed && <p>Completada</p>}
                <p>Fecha de creacion {id}</p>
            </div>
        </div>
    )
}