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
	},
};
