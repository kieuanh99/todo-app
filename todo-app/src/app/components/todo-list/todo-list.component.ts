import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() todos: any[];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
  }

  onChangeStatusTodo(data:{ id:number, isCompleted:number }) {

    this.todoService.updateStatus(data).subscribe((response: any) => {
      if (response) {
        window.location.reload();
      }
    });
  }

  onEditTodo(todo:any){
    this.todoService.updateTodo(todo).subscribe((response: any) => {
      if (response) {
        window.location.reload();
      }
    });
  }

  onDeleteTodo(id:number){
    this.todoService.deleteTodoById(id).subscribe((response:any)=>{
      if (response) {
        window.location.reload();
      }
    });
  }

  
}
