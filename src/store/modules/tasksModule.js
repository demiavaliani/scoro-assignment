import api from "@/api";

export default {
	namespaced: true,
	state: {
		specificTask: {},
	},

	getters: {},

	mutations: {
		getTaskByIdMutation(state, payload) {
			state.specificTask = payload;
		},
	},

	actions: {
		// callAction(context) {
		// 	console.log("tasksModule action called");
		// },

		getTaskByIdAction({ commit }, id) {
			return new Promise((resolve) => {
				api.getTaskById(id).then((res) => {
					commit("getTaskByIdMutation", res.data);
					resolve();
				});
			});
		},
	},
};
