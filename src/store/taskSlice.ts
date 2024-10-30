import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ISubTask {
  subTask: string;
  isCompleted: boolean;
}
export interface ITask {
  taskName: string;
  subTasks: Array<ISubTask>;
  tags: string[];
}
export type TaskListState = {
  taskList: ITask[];
}
const initialState: TaskListState = {
  taskList: [{
    taskName: 'Task 1',
    subTasks: [{
      subTask: 'Subtask 1',
      isCompleted: false,
    },
    {
      subTask: 'Subtask 2',
      isCompleted: false,
    },
    {
      subTask: 'Subtask 3',
      isCompleted: false,
    }],
    tags: ['UI', 'UX'],
  }],
}

export const taskSlice = createSlice({
  name: 'taskConfig',
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<ITask>) => {
      state.taskList.push(action.payload);
    },
    updateSubTaskCompletion: (
      state,
      action: PayloadAction<{ taskIndex: number; subTaskIndex: number; isCompleted: boolean }>
    ) => {
      const { taskIndex, subTaskIndex, isCompleted } = action.payload;

      // Ensure the taskIndex and subTaskIndex are valid
      if (
        state.taskList[taskIndex] &&
        state.taskList[taskIndex].subTasks[subTaskIndex]
      ) {
        state.taskList[taskIndex].subTasks[subTaskIndex].isCompleted = isCompleted;
      }
    },
  },
});

type State = {
  [taskSlice.name]: TaskListState & Record<string, unknown>;
};

export const { setTasks, updateSubTaskCompletion } = taskSlice.actions;

export const selectTasks = (state: State) => state.taskConfig.taskList;
