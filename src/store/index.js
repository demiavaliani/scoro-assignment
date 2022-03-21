import Vue from "vue";
import Vuex from "vuex";
import api from "@/api";
import projectsModule from "./modules/projectsModule";
import tasksModule from "./modules/tasksModule";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		projects: [],
		tasks: [],
	},

	getters: {},

	mutations: {
		setAllProjectsMutation(state, payload) {
			state.projects = payload;
		},

		setAllTasksMutation(state, payload) {
			state.tasks = payload;
		},
	},

	actions: {
		getAllProjectsAction({ commit }) {
			return new Promise((resolve) => {
				api.getAllProjects().then((res) => {
					commit("setAllProjectsMutation", res);
					resolve();
				});
			});
		},

		getAllTasksAction({ commit }) {
			return new Promise((resolve) => {
				api.getAllTasks().then((res) => {
					commit("setAllTasksMutation", res);
					resolve();
				});
			});
		},
	},

	modules: {
		projectsModule,
		tasksModule,
	},
});
