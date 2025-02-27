export interface Task {
    id: number | string;
    title : string;
    description?:string;
    completed: boolean;
}
