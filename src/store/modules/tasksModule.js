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
					resolve(res.data);
				});
			});
		},

		modifyTaskByIdAction({ commit }, { event_id, payload }) {
			return new Promise((resolve) => {
				api.modifyTaskById({ event_id, payload }).then((res) => {
					resolve(res.data);
				});
			});
		},
	},
};
