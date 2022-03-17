import api from "@/api";

export default {
	namespaced: true,
	state: {},

	getters: {},

	mutations: {},

	actions: {
		getProjectByIdAction({ commit }, id) {
			return new Promise((resolve) => {
				api.getProjectById(id).then((res) => {
					resolve(res.data);
				});
			});
		},

		modifyProjectByIdAction({ commit }, { project_id, payload }) {
			return new Promise((resolve) => {
				api.modifyProjectById({ project_id, payload }).then((res) => {
					resolve(res.data);
				});
			});
		},
	},
};
