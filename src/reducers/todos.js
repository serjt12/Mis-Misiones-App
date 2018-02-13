import types from '../actions/actionTypes';
const initialState = [{
    id: 0,
    completed: true,
    text: "Learn to code",


  },
  {
    id: 1,
    completed: false,
    text: "Code",


  },
  {
    id: 2,
    completed: true,
    text: "Be Happy",


  }
]


export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.ADD_TODO:

      return [
        ...state,
        {
          id: state.length,
          completed: false,
          text: action.text,

        }


      ];
    case types.REMOVE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      );
    case types.COMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.id ? {
          ...todo,
          completed: !todo.completed,
        } :
        todo
      );
    case types.COMPLETE_ALL:
      const alreadyCompleted = state.every(({ completed }) => completed);
      return state.map(todo => ({
        ...todo,
        completed: !alreadyCompleted
      }));
    case types.REMOVE_COMPLETED:
      return state.filter(todo => todo.completed === false);
    case types.EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ? {
          ...todo,
          editing: !todo.editing,
        } :
        todo
      );
    default:
      return state;
  }
}
