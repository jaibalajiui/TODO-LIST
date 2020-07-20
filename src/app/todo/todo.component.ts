import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {Task} from './task';
import {TodoService} from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @ViewChild('todoTask') taskElement: ElementRef;

  todoList: Task[] = [];
  constructor(private toDoService: TodoService) {
  }

  ngOnInit(): void {
    this.toDoService.toDoListChanged.subscribe((toDoList) => {
        this.todoList = toDoList;
    });
  }

  addTask() {
    console.log('addtask()');
    if ( this.taskElement.nativeElement.value !== '') {
      this.toDoService.addTodo({
        title: this.taskElement.nativeElement.value,
        isCompleted: false,
        
      });
      this.taskElement.nativeElement.value = '';
    }
  }
}
