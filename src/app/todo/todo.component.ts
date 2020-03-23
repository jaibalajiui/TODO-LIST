import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {Task} from './task';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo: Task[] = [];
  item: any = null;
  myclass: string;
  constructor() {
    this.todo.push({
        title: 'Hi',
        isCompleted: false
      });
  }

  ngOnInit(): void {
  }

  addItem(){
    this.todo.push({title: this.item, isCompleted: false});
    this.item = null;
  }
}
