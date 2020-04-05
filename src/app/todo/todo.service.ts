import { Injectable } from '@angular/core';
import { Task } from './task';
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
    this.addFirst();
   }

   addFirst(){
     this.toDoList.push({title: 'jai', isCompleted: false});
     this.toDoList.push({title: 'balaji', isCompleted: true});
     this.toDoListChanged.next(this.toDoList.slice());
   }

   addTodo(todoVal: Task) {
     this.toDoList.push(todoVal);
     this.toDoListChanged.next(this.toDoList.slice());
   }

}
