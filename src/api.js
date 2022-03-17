import axios from "axios";

export default {
	async getAllProjects(payload) {
		try {
			return await axios.post("/api/v2/projects/list", payload);
		} catch (error) {}
	},
	async getAllTasks(payload) {
		try {
			return await axios.post("/api/v2/tasks/list", payload);
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

	async modifyProjectById({ id, payload }) {
		try {
			return await axios.post(`/api/v2/projects/modify/${id}`, payload);
		} catch (error) {}
	},

	async modifyTaskById({ id, payload }) {
		try {
			return await axios.post(`/api/v2/tasks/modify/${id}`, payload);
		} catch (error) {}
	},
};
