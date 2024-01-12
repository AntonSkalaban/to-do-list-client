export const statuses = ["done", "pending", "in progress"] as const;

export type TaskStatus = (typeof statuses)[number];

export interface Task {
  _id: string;
  title: string;
  description: string;
  status: "done" | "in progress" | "pending";
}

export interface GroupedTasks {
  [key: string]: Task[];
}
