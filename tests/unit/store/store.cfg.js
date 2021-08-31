import vuex from "@/store/modules/TaskList";
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
    activeFilter: "all"
  },
  getters: vuex.getters,
  actions: vuex.actions,
  mutations: vuex.mutations,
};