import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasksList: [
        {
            id: 1,
            text: "Откликнуться на вакансию",
            completed: true
        },
        {
            id: 2,
            text: "Выполнить тестовое задание",
            completed: true
        },
        {
            id: 3,
            text: "Пройти собеседование",
            completed: false
        },
        {
            id: 4,
            text: "Пройти стажировку",
            completed: false
        },
        {
            id: 5,
            text: "????",
            completed: false
        },
        {
            id: 6,
            text: "PROFIT!!!",
            completed: false
        },
    ],
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask(state, action) {
            state.tasksList.push({
                id: Date.now(),
                text: action.payload.taskText,
                completed: false,
            })
        },
        reorderTasks(state, action) {
            state.tasksList = action.payload;
        },
        toggleTaskCompletion(state, action) {
            const item = state.tasksList.find(task => task.id === action.payload.id);
            item.completed = !item.completed;
        },
        deleteTask(state, action) {
            state.tasksList = state.tasksList.filter(task => task.id !== action.payload.id);
        }
    }
})

export const { addTask, reorderTasks, toggleTaskCompletion, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;