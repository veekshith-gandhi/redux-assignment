import { actionType } from "./actionType";

export const addTodoAction = (title, description) => ({
  type: actionType.ADD_TODO,
  payload: {
    title: title,
    description: description,
  },
});
