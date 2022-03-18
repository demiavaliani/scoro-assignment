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
		projectStatuses: [],
		taskStatuses: [],
	},

	getters: {},

	mutations: {
		setAllProjectsMutation(state, payload) {
			state.projects = payload;
		},

		setAllTasksMutation(state, payload) {
			state.tasks = payload;
		},

		setProjectStatusesMutation(state, payload) {
			state.projectStatuses = payload;
		},

		setTaskStatusesMutation(state, payload) {
			state.taskStatuses = payload;
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

		getProjectStatusesAction({ commit }) {
			return new Promise((resolve) => {
				api.getStatuses("projects").then((res) => {
					commit("setProjectStatusesMutation", res);
					resolve();
				});
			});
		},

		getTaskStatusesAction({ commit }) {
			return new Promise((resolve) => {
				api.getStatuses("tasks").then((res) => {
					commit("setTaskStatusesMutation", res);
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
