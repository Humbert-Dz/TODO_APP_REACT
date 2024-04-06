export const reducer = (state = [], action) => {
  //desestructura la acction
  const { type, payload } = action;

  switch (type) {
    case "[TODO] Add Todo":
      return [...state, payload];
    case "[TODO] Delete Todo":
      return state.filter((todo) => todo.id !== payload);
    case "[TODO] toggle todo":
      return state.map((todo) => {
        if (todo.id === payload) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
    default:
      return state;
  }
};
