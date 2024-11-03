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
    taskName: 'Donate Rs. 500 to the charity',
    subTasks: [{
      subTask: 'Donate Rs. 500 to the charity',
      isCompleted: true,
    },
    {
      subTask: 'Donate Rs. 500 to the charity'
      ,
      isCompleted: true,
    },
    ],
    tags: ['Donations', 'Social'],
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

      if (
        state.taskList[taskIndex] &&
        state.taskList[taskIndex].subTasks[subTaskIndex]
      ) {
        state.taskList[taskIndex].subTasks[subTaskIndex].isCompleted = isCompleted;
      }
    },
    editTask: (
      state,
      action: PayloadAction<{ taskIndex: number; updatedTask: ITask }>
    ) => {
      const { taskIndex, updatedTask } = action.payload;
      if (state.taskList[taskIndex]) {
        state.taskList[taskIndex] = updatedTask;
      }
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      const taskIndex = action.payload;
      if (state.taskList[taskIndex] !== undefined) {
        state.taskList.splice(taskIndex, 1);
      }
    },
  },
});

type State = {
  [taskSlice.name]: TaskListState & Record<string, unknown>;
};

export const { setTasks, updateSubTaskCompletion, editTask, deleteTask } = taskSlice.actions;

export const selectTasks = (state: State) => state.taskConfig.taskList;
