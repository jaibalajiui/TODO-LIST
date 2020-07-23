import { Injectable } from '@angular/core';
import Task  from './Task.model';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  toDoListChanged = new BehaviorSubject<Task[]>([]);
  private toDoList: Task[];
  toDoItem: Task;

  constructor() {
    this.toDoList = [];
    this.toDoItem = null;
   }

   addTodo(todoVal: Task) {
     this.toDoList.push(todoVal);
     this.toDoListChanged.next(this.toDoList.slice());
   }

}
