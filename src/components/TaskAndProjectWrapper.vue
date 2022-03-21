<template>
	<div class="task-and-project-wrapper">
		<div class="tab">
			<div class="projects-wrapper" @click="tabOption = 'projects'">
				<div class="projects">
					<p>Projects</p>
				</div>
			</div>

			<div class="tasks-wrapper" @click="tabOption = 'tasks'">
				<div class="tasks">
					<p>Tasks</p>
				</div>
			</div>
		</div>

		<div class="list-area" v-if="tabOption == 'projects'">
			<ListItem
				v-for="item in projects"
				:key="item.project_id"
				:tab-option="tabOption"
				:project-name="!!item.project_name ? item.project_name : undefined"
				:company-name="!!item.company_name ? item.company_name : undefined"
				:manager-email="!!item.manager_email ? item.manager_email : undefined"
				:project-start="!!item.date ? item.date : undefined"
				:project-deadline="!!item.deadline ? item.deadline : undefined"
			></ListItem>
		</div>

		<div class="list-area" v-else-if="tabOption == 'tasks'">
			<ListItem
				v-for="item in tasks"
				:key="item.event_id"
				:tab-option="'tasks'"
				:event-name="!!item.event_name ? item.event_name : undefined"
				:company-name="!!item.company_name ? item.company_name : undefined"
				:owner-email="!!item.owner_email ? item.owner_email : undefined"
				:task-start="dateTimeFormatted(!!item.start_datetime ? item.start_datetime : undefined)"
				:task-deadline="dateTimeFormatted(!!item.datetime_due ? item.datetime_due : undefined)"
			></ListItem>
		</div>

		<!-- <div class="list-area" v-if="tabOption == 'projects'">
			<ListItem
				v-for="(item, index) in projects"
				:key="item.project_id"
				:tab-option="tabOption"
				v-bind="listItemProps(index)"
			></ListItem>
		</div> -->
	</div>
</template>

<script>
import { mapState } from "vuex";
import ListItem from "./ListItem.vue";

export default {
	name: "TaskAndProjectWrapper",

	components: { ListItem },

	data() {
		return {
			tabOption: "tasks",
			sample: [1, 2, 3, 4, 5],
		};
	},

	computed: {
		...mapState({
			projects: "projects",
			tasks: "tasks",
		}),
	},

	methods: {
		dateTimeFormatted(dateToFormat) {
			if (dateToFormat) {
				const date = new Date(dateToFormat);
				const dateYear = date.getFullYear();
				const dateMonth = ("0" + (date.getMonth() + 1)).slice(-2);
				const dateDay = ("0" + date.getDate()).slice(-2);
				const dateFormatted = `${dateYear}-${dateMonth}-${dateDay}`;

				return dateFormatted;
			}
		},

		// listItemProps(index) {
		// 	let propObject = {};
		// 	if (this.projects.length > 0) {
		// 		propObject.projectName = !!this.projects[index].project_name
		// 			? this.projects[index].project_name
		// 			: undefined;
		// 		propObject.companyName = !!this.projects[index].company_name
		// 			? this.projects[index].company_name
		// 			: undefined;
		// 		propObject.managerEmail = !!this.projects[index].manager_email
		// 			? this.projects[index].manager_email
		// 			: undefined;
		// 		propObject.projectStart = !!this.projects[index].date ? this.projects[index].date : undefined;
		// 		propObject.projectDeadline = !!this.projects[index].deadline
		// 			? this.projects[index].deadline
		// 			: undefined;
		// 	}
		// 	return propObject;
		// },
	},
};
</script>

<style scoped lang="scss">
.task-and-project-wrapper {
	width: 40vw;
	max-width: 450px;

	@media screen and (max-width: 735.5px) {
		width: 70vw;
	}

	& .tab {
		display: flex;
		border: 1px solid var(--border-color);
		border-radius: 15px 15px 0 0;

		& .projects-wrapper {
			width: 100%;
			border-right: 1px solid var(--border-color);
			cursor: pointer;
		}

		& .tasks-wrapper {
			width: 100%;
			cursor: pointer;
		}

		& .projects,
		.tasks {
			width: 100%;
			margin: 12px 0;
		}
	}

	& .list-area {
		width: 100%;
		height: 80vh;
		padding: 11px 11px;
		box-sizing: border-box;
		border: 1px solid var(--border-color);
		border-top: 0;
		border-radius: 0 0 15px 15px;
		overflow-y: auto;

		&::-webkit-scrollbar {
			width: 3px;

			&-thumb {
				border-radius: 50px;
				background-color: #a8a8a8;
			}

			&-track-piece {
				margin-bottom: 12px;
			}
		}
	}
}

.list-item-wrapper {
	margin-bottom: 16px;

	&:last-child {
		margin: 0;
	}
}
</style>
