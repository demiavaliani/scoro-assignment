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
		getAllProjectsMutation(state, payload) {
			state.projects = payload;
		},

		getAllTasksMutation(state, payload) {
			state.tasks = payload;
		},
	},

	actions: {
		getAllProjectsAction({ commit }, payload) {
			return new Promise((resolve) => {
				api.getAllProjects(payload).then((res) => {
					commit("getAllProjectsMutation", res.data);
					resolve();
				});
			});
		},

		getAllTasksAction({ commit }, payload) {
			return new Promise((resolve) => {
				api.getAllProjects(payload).then((res) => {
					commit("getAllTasksMutation", res.data);
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
