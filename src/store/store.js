import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import todoListReducer from './slices/todoListSlice';

export default configureStore({
  reducer: {
    todoList: todoListReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'todoList/fetchTodoLists',
          'todoList/fetchTodoLists/pending',
          'todoList/fetchTodoLists/rejected',
          'todoList/fetchTodoLists/fulfilled',
        ],
      },
    }),
});
