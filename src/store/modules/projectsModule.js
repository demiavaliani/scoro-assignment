import api from "@/api";
import Vue from "vue";

export default {
	namespaced: true,
	state: {
		projectStatuses: [],
	},

	getters: {},

	mutations: {
		setProjectStatusesMutation(state, payload) {
			state.projectStatuses = payload;
		},

		modifyProjectStatusesOrderMutation(state, payload) {
			state.projectStatuses = payload;
		},
	},

	actions: {
		getProjectByIdAction({ commit }, id) {
			return new Promise((resolve) => {
				api.getProjectById(id).then((res) => {
					resolve(res);
				});
			});
		},

		//	receives request parameters in "payload: {}" object as key:value pairs
		//	payload: {
		//		status: "test-status",
		//	},
		modifyProjectByIdAction({ commit }, { project_id, payload }) {
			return new Promise((resolve) => {
				api.modifyProjectById({ project_id, payload }).then((res) => {
					resolve(res);
				});
			});
		},

		getProjectStatusesAction({ commit }) {
			return new Promise((resolve) => {
				api.getStatuses("projects").then((res) => {
					commit("setProjectStatusesMutation", res);
					resolve(res);
				});
			});
		},

		modifyProjectStatusesOrderAction({ commit }, payload) {
			return new Promise((resolve) => {
				commit("modifyProjectStatusesOrderMutation", payload);
				resolve();
			});
		},
	},
};
