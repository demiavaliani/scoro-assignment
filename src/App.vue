<template>
	<div id="app">
		<TaskAndProjectWrapper></TaskAndProjectWrapper>
		<!-- <AllStatuses></AllStatuses> -->
	</div>
</template>

<script>
import ListItem from "../src/components/ListItem.vue";
import TaskAndProjectWrapper from "../src/components/TaskAndProjectWrapper.vue";
import AllStatuses from "../src/components/AllStatuses.vue";

export default {
	name: "App",

	components: {
		ListItem,
		TaskAndProjectWrapper,
		AllStatuses,
	},

	methods: {},

	mounted() {
		this.$store.dispatch("getAllProjectsAction");
		this.$store.dispatch("getAllTasksAction");
		this.$store.dispatch("projectsModule/getProjectStatusesAction");
		this.$store.dispatch("tasksModule/getTaskStatusesAction");
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
	--border-color: #222935;
}
</style>
