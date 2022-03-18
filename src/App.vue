<template>
	<div id="app">
		<ListItem></ListItem>
	</div>
</template>

<script>
// import ListItem from "./components/ListItem";
import ListItem from "../src/components/ListItem.vue";

export default {
	name: "App",
	components: {
		ListItem,
	},
	methods: {},
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
