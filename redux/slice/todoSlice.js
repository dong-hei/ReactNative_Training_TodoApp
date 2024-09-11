import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    currentId: 4,
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: state.currentId++, // currentId가 1씩 증가
        text: action.payload.trim(), // 텍스트에 할일들이 나열된다
        state: 'todo',
      });
    },

    updateTodo: (state, action) => {
      const item = state.todos.findIndex((item) => item.id === action.payload);
      state.todos[item].state =
        state.todos[item].state === 'todo' ? 'done' : 'todo';
      state.todos.push(state.todos.splice(item, 1)[0]); //item을 없애고 변경된 상태 저장
      // -> 왜 이렇게 하나? ToDo App에서 완료됐을때 밑으로 내려야하기때문에 배열을 바꾸게끔하기위함
    },

    deleteTodo: (state, action) => {
      const item = state.todos.findIndex((item) => item.id === action.payload);
      //해당아이템이 존재한다
      if (item > -1) {
        state.todos.splice(item, 1);
      }
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
//Todo 를 위한 Slice
