import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import todoListReducer from './slices/todoListSlice';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export default configureStore({
  reducer: {
    todoList: todoListReducer,
  },

  middleware: customizedMiddleware,
});
