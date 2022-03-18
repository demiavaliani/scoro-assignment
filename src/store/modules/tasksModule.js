import api from "@/api";

export default {
	namespaced: true,
	state: {},

	getters: {},

	mutations: {},

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
	},
};
