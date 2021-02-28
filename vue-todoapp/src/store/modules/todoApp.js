const Storage = {
  fetch() {
    let arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  }
};
const state = {
  todoItems: Storage.fetch()
};

const getters = {
  getTodoItems(state) {
    return state.todoItems;
  }
};

const mutations = {
  addcomTodo(state, todoItem) {
    let obj = { completed: false, item: todoItem };
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
  },
  removeComItem(state, payload) {
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index, 1);
  },
  completeComTodo(state, payload) {
    // todoItem.completed = !todoItem.completed;
    state.todoItems[payload.index].completed = !state.todoItems[payload.index]
      .completed;
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(
      payload.todoItem.item,
      JSON.stringify(payload.todoItem)
    );
  },
  deleteComTodo(state) {
    localStorage.clear();
    state.todoItems = "";
  }
};

export default {
  state,
  getters,
  mutations
};
