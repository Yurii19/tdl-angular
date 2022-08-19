export interface ITask {
    id: Number,
    title: String,
    description: String,
    status: String
}

export interface ITaskState {
    tasksSet: ITask[] 
}
export interface IAppState {
    tasks: ITaskState;
}