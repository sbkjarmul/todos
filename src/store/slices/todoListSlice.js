import { createSlice } from '@reduxjs/toolkit';

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState: {
    todoLists: [],
    isFetching: false,
    isError: false,
  },
  reducers: {
    clearState: (state) => {
      state.todoLists = [];
    },
    setTodoList: (state, action) => {
      state.todoLists = action.payload;
    },
  },
});

export const { clearState, setTodoList } = todoListSlice.actions;

export default todoListSlice.reducer;
