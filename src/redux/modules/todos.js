// Action value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_CHECKED_TODO = "TOGGLE_CHECKED_TODO";
const GET_TODO_BY_ID = "GET_TODO_BY_ID";

// Action Creator
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const toggleCheckedTodo = (payload) => {
  return {
    type: TOGGLE_CHECKED_TODO,
    payload,
  };
};

export const getTodoByID = (payload) => {
  return {
    type: GET_TODO_BY_ID,
    payload,
  };
};

// initial state
const initialState = {
  todos: [
    {
        id: "1",
        title: '리액트 공부하기',
        text: '리액트 기초를 공부해봅시다.',
        checked: false,
    },
    {
        id: "2",
        title : '컴포넌트 스타일링해 보기',
        text: '컴포넌트 스타일링 해봅시다.',
        checked: false,
    },
    {
        id: "3",
        title : '일정 관리 앱 만들어 보기',
        text: '일정 관리 앱 만들어 봅시다.',
        checked: true,
    },
  ],
  todo: {
    id: "0",
    title: "",
    text: "",
    checked: false,
  },
};


const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case TOGGLE_CHECKED_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              checked: !todo.checked,
            };
          } else {
            return todo;
          }
        }),
      };

    case GET_TODO_BY_ID:
      return {
        ...state,
        todo: state.todos.find((todo) => {
          return todo.id === action.payload;
        }),
      };
   
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };

    default:
      return state;
  }
};

export default todos;
