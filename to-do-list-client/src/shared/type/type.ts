export interface Task {
  _id: string;
  title: string;
  description: string;
  status: "done" | "in progress" | "pending";
}

export const statuses = ["done", "pending", "in progress"] as const;

export type TaskStatus = (typeof statuses)[number];
