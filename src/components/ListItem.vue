<template>
	<div class="list-item-wrapper">
		<div class="header">
			<div class="project-name">
				<p v-if="activeTab == 'projects'">{{ projectName }}</p>
				<p v-else>{{ eventName }}</p>
			</div>
			<div class="project-status" :style="activeStatusColor">
				<div class="status-toggle" @click="toggleStatusModal($event)" :style="activeStatusColor">
					{{ activeTab == "projects" ? projectStatus : taskStatus }}
				</div>
				<AllStatuses
					@status-clicked="toggleStatusModal($event)"
					:tabType="activeTab == 'projects' ? 'projectStatuses' : activeTab == 'tasks' ? 'taskStatuses' : ''"
				></AllStatuses>
			</div>
		</div>

		<div class="info">
			<div class="info-row">
				<div class="info-item-wrapper">
					<p class="key">Company</p>
					<p v-if="activeTab == 'projects'" class="key">Manager email</p>
					<p v-else class="key">Owner email</p>
				</div>

				<div class="info-item-wrapper">
					<p class="value">{{ companyName }}</p>
					<a v-if="activeTab == 'projects'" class="value" href="#">{{ managerEmail }}</a>
					<a v-else class="value" href="#">{{ ownerEmail }}</a>
				</div>
			</div>

			<div class="info-row">
				<div class="info-item-wrapper">
					<p v-if="activeTab == 'projects'" class="key">Start date</p>
					<p v-else class="key">Creation date</p>
					<p class="key">Deadline</p>
				</div>

				<div class="info-item-wrapper">
					<p v-if="activeTab == 'projects'" class="value date">{{ projectStart }}</p>
					<p v-else class="value date">{{ taskStart }}</p>
					<p v-if="activeTab == 'projects'" class="value date">{{ projectDeadline }}</p>
					<p v-else class="value date">{{ taskDeadline }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";
import AllStatuses from "./AllStatuses.vue";

export default {
	name: "ListItem",

	props: {
		activeTab: {},
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
		projectStatus: {
			default: "Not indicated",
		},
		taskStatus: {
			default: "Not indicated",
		},
	},

	components: {
		AllStatuses,
	},

	data() {
		return {};
	},

	computed: {
		...mapState({
			projectStatuses: (state) => state.projectsModule.projectStatuses,
			taskStatuses: (state) => state.tasksModule.taskStatuses,
		}),

		activeStatusColor() {
			const projectStatus = this.projectStatus;
			const taskStatus = this.taskStatus;

			let activeProjectStatus = this.projectStatuses.find(function (item) {
				return item.status_id == projectStatus;
			});

			const activeTaskStatus = this.taskStatuses.find(function (item) {
				item.status_id == taskStatus;
			});

			if (this.activeTab == "projects" && activeProjectStatus) {
				return { backgroundColor: activeProjectStatus.color };
			} else if (this.activeTab == "tasks" && activeTaskStatus) {
				return { backgroundColor: activeTaskStatus.color };
			} else {
				return { backgroundColor: "#47C1BF" };
			}
		},
	},

	methods: {
		toggleStatusModal(ev) {
			if (ev && ev.target) {
				ev.target.nextSibling.classList.toggle("shown");
			} else {
				const element = document.getElementsByClassName("shown");
				element[0].classList.toggle("shown");
			}
		},
	},
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

	& .header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;

		& .project-name {
			text-align: start;
			width: 70%;

			p {
				width: calc(100%);
				overflow: hidden;
				text-overflow: ellipsis;
				word-wrap: break-word;
			}
		}

		.project-status {
			position: relative;
			width: fit-content;
			max-width: 40%;
			padding: 0 7px;
			border-radius: 4px;
		}

		.status-toggle {
			margin-top: 1px;
		}
		.statuses-list {
			display: none;

			&.shown {
				display: block;
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
		}
	}
}
</style>
