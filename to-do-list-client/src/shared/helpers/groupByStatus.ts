import { Task } from "shared/type/type";

export const groupByStatus = (tasks: Task[]) => {
  return tasks?.reduce((acc, task) => {
    const { status } = task;
    acc[status] = acc[status] || [];
    acc[status].push(task);
    return acc;
  }, {} as { [key: string]: Task[] });
};
