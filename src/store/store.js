import { configureStore } from '@reduxjs/toolkit';
import todoListReducer from './slices/todoListSlice';

export default configureStore({
  reducer: {
    todoList: todoListReducer,
  },
});
