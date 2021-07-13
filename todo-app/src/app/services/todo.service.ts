import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Filter } from '../models/filtering.model';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private userApi = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}
 
  getList():Observable<any[]>{
    return this.http.get<any[]>(this.userApi+'todos/')
  }
  getTodoById(id:number):Observable<any[]>{
    return this.http.get<any[]>(this.userApi+'todoById/'+id)
  }

  getTodoByIsCompleted(isCompleted:number):Observable<any[]>{
    return this.http.get<any[]>(this.userApi+'todoByStatus/'+isCompleted)
  }

  deleteTodoById(id:number):Observable<any[]>{
    return this.http.delete(this.userApi+'deleteTodo/'+id , {responseType: 'text'}).pipe(map((response:any) => response));
  }

  addTodo(data:any):Observable<any[]>{
    return this.http.post<any[]>(this.userApi+'addTodo/', data)
  }

  updateTodo(data:any):Observable<any[]>{
    return this.http.put<any[]>(this.userApi+'updateTodo/', data)
  }

  updateStatus(data:any):Observable<any[]>{
    return this.http.put<any[]>(this.userApi+'updateStatus/', data)
  }

}
