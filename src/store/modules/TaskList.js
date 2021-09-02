import { v4 as uuidv4 } from "uuid";

export default {
  state: {
    tasksList: [],
    filters: [
      {
        text: "All",
        value: "all",
        isChecked: true,
        id: uuidv4(),
      },
      {
        text: "Active",
        value: "active",
        isChecked: false,
        id: uuidv4(),
      },
      {
        text: "Completed",
        value: "completed",
        isChecked: false,
        id: uuidv4(),
      },
    ],
    activeFilter: "all",
  },
  getters: {
    listTasks({tasksList, activeFilter}) {
      switch (activeFilter) {
        case "active":
          return tasksList.filter((item) => !item.isChecked);
        case "completed":
          return tasksList.filter((item) => item.isChecked);
        default:
          return tasksList;
      }
    },
    countTask({ tasksList }) {
      return tasksList.length;
    },
    countActiveTask({ tasksList }) {
      return tasksList.filter((task) => !task.isChecked).length;
    },
    countCompletedTask({ tasksList }) {
      return tasksList.filter((task) => task.isChecked).length;
    },
    filterList({ filters }) {
      return filters;
    },
    getActiveFilter({ activeFilter }) {
      return activeFilter;
    },
  },
  mutations: {
    addNewTask(state, task) {
      if (task) {
        const newTask = {
          text: task,
          isChecked: false,
          id: uuidv4(),
        };
        state.tasksList.push(newTask);
      }
    },
    deleteTask(state, id) {
      state.tasksList = state.tasksList.filter((task) => task.id !== id);
    },
    changeStatusTask(state, id) {
      state.tasksList = state.tasksList.map((task) =>
        task.id === id ? { ...task, isChecked: !task.isChecked } : task
      );
    },
    changeActiveFilter(state, value) {
      state.activeFilter = value;
      state.filters = state.filters.map((filter) =>
        filter.value === value
          ? { ...filter, filter: true }
          : { ...filter, filter: false }
      );
    },
    saveDataLocalStorage({ tasksList }) {
      localStorage.setItem("tasksList", JSON.stringify(tasksList));
    },
    getTasksFromLocalStorage(state) {
      if (localStorage.tasksList) {
        try {
          state.tasksList = JSON.parse(localStorage.getItem("tasksList"));
        } catch (e) {
          localStorage.removeItem("tasksList");
        }
      }
    },
  },
  actions: {
    getFromLocalStorage({ commit }) {
      commit("getTasksFromLocalStorage");
    },
    saveToLocalStorage({ commit }) {
      commit("saveDataLocalStorage");
    }
  },
};
