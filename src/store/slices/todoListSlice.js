import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TodoService } from '../../services/TodoService';

export const fetchTodoLists = createAsyncThunk(
  'todoList/fetchTodoLists',
  async () => {
    const todoService = new TodoService();

    try {
      const response = await todoService.getTodoLists();
      console.log('THUNK: ', response);
      return response;
    } catch (e) {
      console.log(e);
    }
  }
);

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState: {
    todoLists: [],
    status: 'idle',
    error: null,
    // isFetching: false,
    // isError: false,
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

export const selectAllLists = (state) => state.todoList.todoLists;

export default todoListSlice.reducer;
