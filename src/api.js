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
};
