import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public totalLength:number;
  public todos:any[];
  constructor(private todoService: TodoService){

  }

  ngOnInit(){
    this.loadTodo();
  }
  
  loadTodo(){
    this.todoService.getList().subscribe((response:any)=>{
      if(response){
        this.totalLength=response.length;
        this.todos= response;
      }
    })
  }
 
  onChangeFilter(type:any){
    if(type==0){
      this.todoService.getList().subscribe((response:any)=>{
        if(response){
          this.todos= response;
        }
      })
    }
    else if(type==1){
      this.todoService.getTodoByIsCompleted(0).subscribe((response:any)=>{
        if(response){
          this.todos= response;
        }
      })
    }
    else if(type==2){
      this.todoService.getTodoByIsCompleted(1).subscribe((response:any)=>{
        if(response){
          this.todos= response;
        }
      })
    }
  }
}
