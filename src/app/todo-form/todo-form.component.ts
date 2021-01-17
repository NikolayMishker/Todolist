import { Component, OnInit } from '@angular/core';
import { ITodo, TodosService } from '../shared/todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  title: string = ''

  constructor(public todoService: TodosService) { }

  ngOnInit(): void {
  }

  addTodo(){
    const todo: ITodo = {
       title: this.title,
       id: Date.now(),
       completed: false,
       date: new Date()
    }
    this.todoService.addTodo(todo)
    this.title = ''
  }

}
