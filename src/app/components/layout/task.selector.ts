import { state } from '@angular/animations';
import { createSelector } from '@ngrx/store';
import { IAppState, ITaskState } from '../../Interfaces';

export const selectTasksState = (state: IAppState) => state.tasks;

export const selectTasks = createSelector(
    selectTasksState,
    (state: ITaskState) => state.tasksSet
) 

