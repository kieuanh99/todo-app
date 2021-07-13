import { Component, Input, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Filter, FilterButton } from 'src/app/models/filtering.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  filterButtons: FilterButton[] = [
    { type: Filter.All, label: 'All', isActive: true },
    { type: Filter.Active, label: 'Active', isActive: false },
    { type: Filter.Completed, label: 'Completed', isActive: false },
  ];

  @Input() totalLength:number;
  @Output() changeFilter = new EventEmitter();
  todos:any;
  length = 0;
  hasComplete : Observable<boolean>;
  destroy: Subject<null> = new Subject<null>();

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    // this.todoService.getList().subscribe((response:any)=>{
    //   if(response){
    //     this.todos= response;
    //   }
    // })
    // this.hasComplete = this.todos.pipe(map((todos: any[])=> todos.some(t => t.isCompleted) ),
    // takeUntil(this.destroy));
    
  }

  filter(type:Filter){
    this.setActiveFilterBtn(type);
    this.changeFilter.emit(type);
  }

  private setActiveFilterBtn(type:Filter){
    this.filterButtons.forEach(btn =>{
      btn.isActive= btn.type === type;
    });
  }

  ngOnDestroy(): void {
    // this.destroy.next();
    // this.destroy.complete();
  }
}
