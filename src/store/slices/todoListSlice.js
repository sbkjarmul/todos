import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TodoService } from '../../services/TodoService';

export const fetchTodoLists = createAsyncThunk(
  'todoList/fetchTodoLists',
  async () => {
    const todoService = new TodoService();

    try {
      const response = await todoService.getTodoLists();
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
  },
  reducers: {
    clearState: (state) => {
      state.todoLists = [];
    },
    setTodoList: (state, action) => {
      state.todoLists = action.payload;
    },
  },
  extraReducers: {
    'todoList/fetchTodoList/pending': (state, action) => {
      state.status = 'loading';
    },
    'todoList/fetchTodoLists/fulfilled': (state, action) => {
      state.todoLists = action.payload;
      state.status = 'succeeded';
    },
    'todoList/fetchTodoList/rejected': (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const { clearState, setTodoList } = todoListSlice.actions;

export const selectAllLists = (state) => state.todoList.todoLists;

export default todoListSlice.reducer;
