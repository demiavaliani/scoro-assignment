<template>
	<div class="list-item-wrapper">
		<div class="tab">
			<div class="project-name">
				<p v-if="tabOption == 'projects'">{{ projectName }}</p>
				<p v-else>{{ eventName }}</p>
			</div>
			<div class="project-status">
				<p>Waiting</p>
			</div>
		</div>

		<div class="info">
			<div class="info-row">
				<div class="info-item-wrapper">
					<p class="key">Company</p>
					<p v-if="tabOption == 'projects'" class="key">Manager email</p>
					<p v-else class="key">Owner email</p>
				</div>

				<div class="info-item-wrapper">
					<p class="value">{{ companyName }}</p>
					<a v-if="tabOption == 'projects'" class="value" href="#">{{ managerEmail }}</a>
					<a v-else class="value" href="#">{{ ownerEmail }}</a>
				</div>
			</div>

			<div class="info-row">
				<div class="info-item-wrapper">
					<p v-if="tabOption == 'projects'" class="key">Start date</p>
					<p v-else class="key">Creation date</p>
					<p class="key">Deadline</p>
				</div>

				<div class="info-item-wrapper">
					<p v-if="tabOption == 'projects'" class="value date">{{ projectStart }}</p>
					<p v-else class="value date">{{ taskStart }}</p>
					<p v-if="tabOption == 'projects'" class="value date">{{ projectDeadline }}</p>
					<p v-else class="value date">{{ taskDeadline }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ListItem",

	props: {
		tabOption: {},
		projectName: {
			default: "Not indicated",
		},
		eventName: {
			default: "Not indicated",
		},
		companyName: {
			default: "Not indicated",
		},
		managerEmail: {
			default: "Not indicated",
		},
		ownerEmail: {
			default: "Not indicated",
		},
		projectStart: {
			default: "Not indicated",
		},
		taskStart: {
			default: "Not indicated",
		},
		projectDeadline: {
			default: "Not indicated",
		},
		taskDeadline: {
			default: "Not indicated",
		},
	},

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
	width: 100%;
	max-width: 450px;
	min-height: 12vh;
	max-height: fit-content;
	box-sizing: border-box;
	padding: 10px 12px;
	border-radius: 7px;
	box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.25);

	@media screen and (max-width: 735.5px) {
		width: 100%;
	}

	& .tab {
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;

		& .project-name {
			text-align: start;
			width: 80%;

			p {
				width: calc(100%);
				overflow: hidden;
				text-overflow: ellipsis;
				word-wrap: break-word;
			}
		}
	}

	& .info {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		width: 100%;

		@media screen and (max-width: 1091.5px) {
			flex-flow: column;
		}

		&-row {
			display: flex;
			justify-content: space-between;

			&:first-child {
				flex-grow: 2;
				min-width: 54%;
				margin-right: 20px;

				@media screen and (max-width: 1091.5px) {
					margin-right: 0;
				}
			}

			&:nth-child(2) {
				flex-grow: 1;
				min-width: 35%;
			}

			@media screen and (max-width: 1091.5px) {
				&:last-child .info-item-wrapper p:last-child {
					margin-bottom: 0;
				}
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

				@media screen and (max-width: 1091.5px) {
					margin-bottom: 7px;
				}
			}

			p.key {
				width: 30%;
				margin-right: 10px;
			}

			// p.value {
			// 	width: 70%;
			// }
		}
	}
}
</style>
