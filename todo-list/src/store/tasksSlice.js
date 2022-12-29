import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasksList: [],
    },
    reducers: {
        addTask(state, action) {
            state.tasksList.push({
                id: Date.now(),
                text: action.payload.taskText,
                completed: false,
            })
        },
        completedTask(state, action) {
            const item = state.tasksList.find(task => task.id === action.payload.id);
            item.completed = !item.completed;
        },
        deleteTask(state, action) {
            state.tasksList = state.tasksList.filter(task => task.id !== action.payload.id);
        }
    }
})

export const { addTask, completedTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;