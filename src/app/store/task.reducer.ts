import { ITaskState } from '../Interfaces';
import { ITask } from '../Interfaces';
import { createAction, props } from '@ngrx/store';

export const initialTaskState: ITaskState = {
  tasksSet: [
    { id: 0, title: 'title1', description: 'description', status: 'done' },
    { id: 1, title: 'title2', description: 'description', status: 'to do' },
  ],
};

export function taskReducer(state: ITaskState = initialTaskState, action: any) {
  switch (action.type) {
    case 'addTask':
      return {
        ...state,
        tasksSet: [
          ...state.tasksSet, action.task]
        ,
      };
    case 'getTasks':
      return initialTaskState;
    case 'getTask':
      return {
        ...initialTaskState,
        tasksSet: [
          ...initialTaskState.tasksSet,
          initialTaskState.tasksSet[action.data],
        ],
      };
    default:
      return initialTaskState;
  }
}

export const getTasks = createAction('getTasks');

export const getTask = createAction('getTask', props<{ taskId: Number }>());

export const addTask = createAction('addTask', props<{ task: ITask }>());
