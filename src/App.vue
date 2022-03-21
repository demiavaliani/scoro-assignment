<template>
	<div id="app">
		<TaskAndProjectWrapper></TaskAndProjectWrapper>
	</div>
</template>

<script>
import ListItem from "../src/components/ListItem.vue";
import TaskAndProjectWrapper from "../src/components/TaskAndProjectWrapper.vue";

export default {
	name: "App",

	components: {
		ListItem,
		TaskAndProjectWrapper,
	},

	methods: {},

	mounted() {
		this.$store.dispatch("getAllProjectsAction");
		this.$store.dispatch("getAllTasksAction");
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
