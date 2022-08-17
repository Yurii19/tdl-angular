export interface ITask {
    id: Number,
    title: String,
    text: String,
}

export interface ITaskState {
    tasksSet: ITask[] 
}
export interface IAppState {
    tasks: ITaskState;
}