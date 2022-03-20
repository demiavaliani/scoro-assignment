<template>
	<div class="task-and-project-wrapper">
		<div class="header">
			<div class="projects-wrapper">
				<div class="projects">
					<p>Projects</p>
				</div>
			</div>

			<div class="tasks">
				<p>Tasks</p>
			</div>
		</div>

		<div class="list-area">
			<ListItem v-for="(item, index) in sample" :key="index"></ListItem>
		</div>
	</div>
</template>

<script>
import ListItem from "./ListItem.vue";

export default {
	name: "TaskAndProjectWrapper",

	components: { ListItem },

	data() {
		return {
			sample: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
			// sample: [1, 2, 3, 4],
		};
	},

	computed: {},

	methods: {},
};
</script>

<style scoped lang="scss">
.task-and-project-wrapper {
	width: 40vw;
	max-width: 450px;
	height: 80vh;
	box-sizing: border-box;
	border: 1px solid var(--border-color);
	border-radius: 15px;

	@media screen and (max-width: 735.5px) {
		width: 70vw;
	}

	& .header {
		display: flex;
		border-bottom: 1px solid var(--border-color);

		& .projects-wrapper {
			width: 100%;
			border-right: 1px solid var(--border-color);
		}

		& .projects,
		.tasks {
			width: 100%;
			margin: 12px 0;
		}
	}

	& .list-area {
		display: flex;
		flex-flow: column;
		box-sizing: border-box;
		width: 100%;
		height: 91%;
		padding: 11px 11px 0;
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
