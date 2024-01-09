export interface Task {
  _id: string;
  title: string;
  description: string;
  status: "done" | "in progress" | "pending";
}
