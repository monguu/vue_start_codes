// const addcomTodo = (state, todoItem) => {
//   let obj = { completed: false, item: todoItem };
//   localStorage.setItem(todoItem, JSON.stringify(obj));
//   state.todoItems.push(obj);
// };
// const removeComItem = (state, payload) => {
//   localStorage.removeItem(payload.todoItem.item);
//   state.todoItems.splice(payload.index, 1);
// };
// const completeComTodo = (state, payload) => {
//   // todoItem.completed = !todoItem.completed;
//   state.todoItems[payload.index].completed = !state.todoItems[payload.index]
//     .completed;
//   localStorage.removeItem(payload.todoItem.item);
//   localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
// };
// const deleteComTodo = state => {
//   localStorage.clear();
//   state.todoItems = "";
// };
// export { addcomTodo, removeComItem, completeComTodo, deleteComTodo };
