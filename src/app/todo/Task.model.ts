export default interface Task {
  title: string;
  isCompleted: boolean;
  dueDate?: Date;
  notes?: string;
}
