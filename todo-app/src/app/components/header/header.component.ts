import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  todos:any;
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }


  toggleAll(){
  
    // this.todoService.getList().pipe(map((data:any) => {
    //      return{
    //        ...data,
    //        isCompleted: !this.todos.every(t=>t.isCompleted)
    //      };
    //    }));

  }
}
