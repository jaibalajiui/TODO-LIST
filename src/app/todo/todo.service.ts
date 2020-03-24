import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  toDoList: Task[];
  toDoItem: Task;

  constructor() {
    this.toDoList = [];
    this.toDoItem = null;
    this.addFirst();
   }

   addFirst(){
     this.toDoList.push({title: 'jai', isCompleted: false});
     this.toDoList.push({title: 'balaji', isCompleted: true});
   }

   getTodo(): Task[] {
     return this.toDoList;
   }

   addTodo(todoVal: Task) {
     this.toDoList.push(todoVal);
   }

}
