import { createStore } from 'redux';

function todosReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
        },
      ];
    case 'RESET_LIST':
      return [];
    default:
      return state;
  }
}

const initialTodos = [];

export default createStore(todosReducer, initialTodos);