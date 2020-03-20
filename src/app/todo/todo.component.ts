import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo = [];
  item: any = null;
  myclass: string;
  constructor() {
    this.todo.push('Hi');
  }

  ngOnInit(): void {
  }

  addItem(){
    this.todo.push(this.item);
    this.item = null;
  }
}
