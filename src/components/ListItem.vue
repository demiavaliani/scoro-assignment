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
			<div class="info-row">
				<div class="info-item-wrapper">
					<p class="key">Company</p>
					<p class="key">Manager email</p>
				</div>

				<div class="info-item-wrapper">
					<p class="value">ABC Company</p>
					<a class="value" href="#">elar@scoroooooo.com</a>
				</div>
			</div>

			<div class="info-row">
				<div class="info-item-wrapper">
					<p class="key">Start date</p>
					<p class="key">Deadline</p>
				</div>

				<div class="info-item-wrapper">
					<p class="value date">2020-02-25</p>
					<p class="value date">2020-04-24</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ListItem",

	data() {
		return {
			email: "demikoavaliani@gmail.com",
		};
	},

	computed: {},

	methods: {},
};
</script>

<style scoped lang="scss">
.list-item-wrapper {
	display: flex;
	flex-flow: column;
	justify-content: space-between;
	width: 40vw;
	max-width: 450px;
	min-height: 12vh;
	max-height: fit-content;
	box-sizing: border-box;
	padding: 10px 12px;
	border-radius: 7px;
	box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.25);

	@media screen and (max-width: 735.5px) {
		width: 70vw;
	}

	& .header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;
	}

	& .info {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		width: 100%;

		@media screen and (max-width: 1058.5px) {
			flex-flow: column;
		}

		&-row {
			display: flex;
			justify-content: space-between;

			&:first-child {
				flex-grow: 2;
				min-width: 60%;
				margin-right: 20px;

				@media screen and (max-width: 1058.5px) {
					margin-right: 0;
				}
			}

			&:nth-child(2) {
				flex-grow: 1;
				min-width: 35%;
			}
		}

		&-item-wrapper {
			display: flex;
			flex-flow: column;

			p {
				display: flex;

				&:first-child {
					margin-bottom: 7px;
				}
			}

			p.key {
				width: 30%;
				margin-right: 10px;
			}

			p.value {
				width: 70%;
			}
		}
	}
}
</style>
