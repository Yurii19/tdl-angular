import { ITaskState } from '../Interfaces';
import { ITask } from '../Interfaces';
import { createAction, props } from '@ngrx/store';

export const initialTaskState: ITaskState = {
  tasksSet: [
    { id: 0, title: 'title1', description: 'description', status: 'done' },
    { id: 1, title: 'title2', description: 'description', status: 'to do' },
    { id: 2, title: 'title3', description: 'description', status: 'to do' },
    { id: 3, title: 'title4', description: 'description', status: 'to do' },
    { id: 4, title: 'title5', description: 'description', status: 'done' },
    { id: 5, title: 'title6', description: 'description', status: 'to do' },
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
    case 'removeTask':
      return {
        ...state,
        tasksSet: [
          ...state.tasksSet.filter(el => el.id !== action.taskId)]
      };
    default:
      return state;
  }
}

export const addTask = createAction('addTask', props<{ task: ITask }>());

export const removeTask = createAction('removeTask', props<{taskId: Number}>())