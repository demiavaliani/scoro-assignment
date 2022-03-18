<template>
	<div id="app">
		<!-- <button @click="getProjects">Get all Projects</button> -->
		<!-- <button @click="modifyProject">Modify a Project</button> -->
		<!-- <button @click="getProjectStatuses">Get Project statuses</button> -->
	</div>
</template>

<script>
export default {
	name: "App",
	components: {},
	methods: {
		// getProjects() {
		// 	this.$store
		// 		.dispatch("getAllProjectsAction")
		// 		.then((res) => console.log("$store.state.projects", this.$store.state.projects));
		// },
		// getProjectStatuses() {
		// 	this.$store
		// 		.dispatch("getProjectStatusesAction", 1)
		// 		.then((res) => console.log("$store.state.projectStatuses", this.$store.state.projectStatuses));
		// },
		// modifyProject() {
		// 	let data = {
		// 		project_id: 1,
		// 		payload: {
		// 			status: "test-1-2-3",
		// 		},
		// 	};
		// 	this.$store.dispatch("projectsModule/modifyProjectByIdAction", data).then((res) => console.log(res));
		// },
	},
};
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
