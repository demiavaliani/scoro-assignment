<template>
	<div class="statuses-list dragArea">
		<div
			class="status-item"
			v-for="(item, index) in activeTab"
			:key="index"
			:id="item.status_name"
			:class="{ active: item.status_name == activeStatus, draggable: true }"
			@click="statusClicked(item.status_name, $event)"
			draggable="true"
			@dragstart="dragStart($event, item.status_name)"
			@dragover="dragOver($event, item.status_name)"
			@dragend="dragEnd($event, item.status_name)"
		>
			<div class="status-item-wrapper">
				<div class="status-item-color-wrapper">
					<div class="status-item-color" :style="{ backgroundColor: item.color }"></div>
				</div>
				<p>{{ item.status_name }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";

export default {
	name: "AllStatuses",

	props: {
		tabType: {
			default: "projectStatuses",
		},
	},

	data() {
		return {
			statuses: [
				{
					status_name: "On hold",
					color: "#dee5f1",
				},
				{
					status_name: "In progress",
					color: "#bbe5b3",
				},
				{
					status_name: "Pending",
					color: "#ffea8a",
				},
				{
					status_name: "Canceled",
					color: "#c90024",
				},
				{
					status_name: "Needs preparation",
					color: "#5c6ac4",
				},
				{
					status_name: "Delayed",
					color: "#f49342",
				},
				{
					status_name: "Completed",
					color: "#50b83c",
				},
			],

			activeStatus: "",
		};
	},

	computed: {
		...mapState({
			projectStatuses: (state) => state.projectsModule.projectStatuses,
			taskStatuses: (state) => state.tasksModule.taskStatuses,
		}),

		activeTab() {
			return this[this.tabType];
		},
	},

	methods: {
		statusClicked(status, ev) {
			this.activeStatus = status;
			this.$emit("status-clicked");
		},

		dragStart(ev, item) {
			ev.target.classList.add("dragging");
		},

		dragOver(ev, item) {
			ev.preventDefault();
			const dragArea = document.getElementsByClassName("dragArea")[0];
			const draggable = document.getElementsByClassName("dragging")[0];
			const dragElement = this.getDragElement(dragArea, ev.clientY);

			if (dragElement == null) {
				dragArea.appendChild(draggable);
			} else {
				dragArea.insertBefore(draggable, dragElement);
			}
		},

		dragEnd(ev, item) {
			ev.target.classList.remove("dragging");
		},

		getDragElement(dragArea, y) {
			const dragItems = [...dragArea.querySelectorAll(".draggable:not(.dragging)")];

			return dragItems.reduce(
				(closest, item) => {
					const itemRect = item.getBoundingClientRect();
					const positionOffset = y - itemRect.top - itemRect.height / 2;

					if (positionOffset < 0 && positionOffset > closest.positionOffset) {
						return { positionOffset: positionOffset, element: item };
					} else {
						return closest;
					}
				},
				{ positionOffset: Number.NEGATIVE_INFINITY }
			).element;
		},
	},
};
</script>

<style lang="scss" scoped>
.statuses-list {
	position: absolute;
	width: 160px;
	height: fit-content;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 2px 6px rgba(31, 34, 38, 0.08),
		0px 0px 10px 0px rgba(31, 34, 38, 0.12);
	border-radius: 4px;
	background-color: white;

	p {
		font-family: Inter;
		font-size: 12px;
		font-weight: 400;
		color: #1f2226;
	}

	.status-item {
		box-sizing: border-box;
		width: 100%;
		padding-left: 16px;
		padding-right: 16px;
		cursor: pointer;

		&.active {
			background-color: #ebf5fa;

			p {
				color: #043159;
				font-weight: 600;
			}

			.status-item-color {
				border: 2px solid white;
			}
		}

		&:hover {
			background-color: #f7f9fd;
		}

		&:first-child {
			padding-top: 5px;
		}

		&:last-child {
			padding-bottom: 5px;
		}

		&.dragging {
			// border: 1px solid black;
		}

		&-wrapper {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			width: 100%;
			height: 32px;

			.status-item-color {
				width: 12px;
				height: 12px;
				border-radius: 30px;

				&-wrapper {
					display: flex;
					justify-content: center;
					width: 30px;
					min-width: 30px;
					margin-left: -8px;
				}
			}

			p {
				overflow: hidden;
				text-overflow: ellipsis;
				word-wrap: break-word;
			}
		}
	}
}
</style>
