<template>
	<div class="list-item-wrapper">
		<div class="header">
			<div class="project-name">
				<p>Project ABC</p>
			</div>
			<div class="project-status">
				<p>Waiting</p>
			</div>
		</div>

		<div class="info">
			<div class="company-general-wrapper">
				<p class="key">Company</p>
				<p class="value">ABC Company</p>
			</div>

			<div class="manager-general-wrapper">
				<p class="key">Manager email</p>
				<p class="value">elar@scoro.com</p>
			</div>

			<div class="start-date-general-wrapper">
				<p class="key">Start date</p>
				<p class="value">2020-02-25</p>
			</div>

			<div class="deadline-general-wrapper">
				<p class="key">Deadline</p>
				<p class="value">2020-04-24</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ListItem",

	data() {},

	computed: {},

	methods: {},
};
</script>

<style scoped lang="scss">
.list-item-wrapper {
	display: flex;
	flex-flow: column;
	width: 40vw;
	height: 12vh;
	box-sizing: border-box;
	padding: 10px;
	border-radius: 7px;
	box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.25);

	& .header {
		display: flex;
		justify-content: space-between;
	}

	& .info {
		display: flex;
		flex-flow: column;

		&
	}
}
</style>
