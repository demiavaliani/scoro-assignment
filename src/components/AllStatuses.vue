<template>
	<div class="statuses-list drag-area" @dragover="dragOver($event)">
		<div
			class="status-item"
			v-for="(item, index) in activeTabStatuses"
			:key="index"
			:id="item.status_name"
			:class="{ active: item.status_name == activeStatus, draggable: true }"
			@click="statusClicked(item.status_name)"
			draggable="true"
			@dragstart="dragStart($event)"
			@dragend="dragEnd($event)"
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
		id: {},
	},

	data() {
		return {
			activeStatus: "",
		};
	},

	computed: {
		...mapState({
			projectStatuses: (state) => state.projectsModule.projectStatuses,
			taskStatuses: (state) => state.tasksModule.taskStatuses,
		}),

		activeTabStatuses() {
			return this[this.tabType];
		},
	},

	methods: {
		statusClicked(status) {
			this.activeStatus = status;
			let element = document.querySelector(`.statuses-list[class~=shown]`);
			this.$emit("status-clicked", element);

			if (this.tabType == "projectStatuses") {
				let data = {
					project_id: this.id,
					payload: {
						status: status,
					},
				};

				this.$store.dispatch("projectsModule/modifyProjectByIdAction", data).then((res) => {
					this.$store.dispatch("getAllProjectsAction");
				});

				this.$emit("change-status", { tabType: "projectStatusLocal", status });
			}
			if (this.tabType == "taskStatuses") {
				let data = {
					event_id: this.id,
					payload: {
						status: status,
					},
				};

				this.$store.dispatch("tasksModule/modifyTaskByIdAction", data).then((res) => {
					this.$store.dispatch("getAllTasksAction");
				});
				this.$emit("change-status", { tabType: "taskStatusLocal", status });
			}
		},

		dragStart(ev, item) {
			ev.target.classList.add("dragging");
			var img = new Image();
			ev.dataTransfer.setDragImage(img, 0, 0);
		},

		dragOver(ev, item) {
			ev.preventDefault();
			const dragArea = ev.target.closest(".drag-area");
			const draggable = document.getElementsByClassName("dragging")[0];
			const dragElement = this.getDragElement(dragArea, ev.clientY);

			if (dragElement == null) {
				dragArea.appendChild(draggable);
			} else {
				dragArea.insertBefore(draggable, dragElement);
			}
		},

		dragEnd(ev, item) {
			let customStatusOrder = [];
			ev.target.classList.remove("dragging");
			const parent = ev.target.closest(".drag-area");
			const children = parent.childNodes;

			children.forEach((item) => {
				customStatusOrder.push(item.id);
			});

			if (this.tabType == "projectStatuses") {
				let newStatusOrder = customStatusOrder.map((item) => {
					return this.projectStatuses.find((data) => {
						if (data.status_name == item) {
							return data;
						}
					});
				});

				this.$store.dispatch("projectsModule/modifyProjectStatusesOrderAction", newStatusOrder);
			} else if (this.tabType == "taskStatuses") {
				let newStatusOrder = customStatusOrder.map((item) => {
					return this.taskStatuses.find((data) => {
						if (data.status_name == item) {
							return data;
						}
					});
				});

				this.$store.dispatch("tasksModule/modifyTaskStatusesOrderAction", newStatusOrder);
			}
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
	right: 0;
	top: 20px;
	width: 160px;
	height: fit-content;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 2px 6px rgba(31, 34, 38, 0.08),
		0px 0px 10px 0px rgba(31, 34, 38, 0.12);
	border-radius: 4px;
	background-color: white;
	z-index: 1;

	@media screen and (max-width: 426px) {
		left: 0;
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
			// opacity: 0.01;
			box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.3);
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
