import axios from "axios";

export default {
	async getAllProjects() {
		try {
			return await axios.post("/api/v2/projects/list");
		} catch (error) {}
	},
	async getAllTasks() {
		try {
			return await axios.post("/api/v2/tasks/list");
		} catch (error) {}
	},

	async getProjectById(id) {
		try {
			return await axios.post(`/api/v2/projects/view/${id}`);
		} catch (error) {}
	},

	async getTaskById(id) {
		try {
			return await axios.post(`/api/v2/tasks/view/${id}`);
		} catch (error) {}
	},

	async getStatuses(module) {
		try {
			let data = {
				filter: {
					module: [module],
				},
			};
			return await axios.post(`/api/v2/statuses/list`, data);
		} catch (error) {}
	},

	async modifyProjectById({ project_id, payload }) {
		try {
			let data = {
				request: {
					...payload,
				},
			};
			return await axios.post(`/api/v2/projects/modify/${project_id}`, data);
		} catch (error) {}
	},

	async modifyTaskById({ event_id, payload }) {
		try {
			let data = {
				request: {
					...payload,
				},
			};
			return await axios.post(`/api/v2/tasks/modify/${event_id}`, data);
		} catch (error) {}
	},
};
