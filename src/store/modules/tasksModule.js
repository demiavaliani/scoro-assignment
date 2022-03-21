import api from "@/api";
import Vue from "vue";

export default {
	namespaced: true,
	state: {
		taskStatuses: [],
	},

	getters: {},

	mutations: {
		setTaskStatusesMutation(state, payload) {
			state.taskStatuses = payload;
		},

		setActiveStatusMutation(state, status) {
			let index = state.taskStatuses.findIndex((item) => {
				return item.status_name == status;
			});

			let task = state.taskStatuses[index];
			task.isActive = "true";

			Vue.set(state.taskStatuses, index, task);

			console.log(state.taskStatuses[index]);
		},
	},

	actions: {
		getTaskByIdAction({ commit }, id) {
			return new Promise((resolve) => {
				api.getTaskById(id).then((res) => {
					resolve(res);
				});
			});
		},

		//	receives request parameters in "payload: {}" object as key:value pairs
		//	payload: {
		//		status: "test-status",
		//	},
		modifyTaskByIdAction({ commit }, { event_id, payload }) {
			return new Promise((resolve) => {
				api.modifyTaskById({ event_id, payload }).then((res) => {
					resolve(res);
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

		setActiveStatusAction({ commit }, status) {
			commit("setActiveStatusMutation", status);
		},
	},
};
