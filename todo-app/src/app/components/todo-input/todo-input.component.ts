import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {
  todoContent:any="";
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.todoContent.trim()===""){
      return false;
    }
    
    this.todoService.addTodo({content:this.todoContent}).subscribe((response:any)=>{
      if(response){
        this.todoContent="";
        window.location.reload();

      }
    })
    
  }

}
