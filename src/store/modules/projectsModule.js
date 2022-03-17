import api from "@/api";

export default {
	namespaced: true,
	state: {
		specificProject: {},
	},

	getters: {},

	mutations: {
		getProjectByIdMutation(state, payload) {
			state.specificTask = payload;
		},
	},

	actions: {
		// callAction(context) {
		// 	console.log("projectsModule action called");
		// },

		getProjectByIdAction({ commit }, id) {
			return new Promise((resolve) => {
				api.getProjectById(id).then((res) => {
					commit("getProjectByIdMutation", res.data);
					resolve();
				});
			});
		},
	},
};
