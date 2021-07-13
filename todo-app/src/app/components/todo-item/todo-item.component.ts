import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

const fadeStrikeThroughAnimation = trigger('fadeStrikeThrough', [
  state(
    'active',
    style({
      fontSize: '18px',
      color: 'black',
    })
  ),
  state(
    'completed',
    style({
      fontSize: '17px',
      color: 'lightgrey',
      textDecoration: 'line-through',
    })
  ),
  transition('active <=> completed', [animate(250)]),
]);

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  animations: [fadeStrikeThroughAnimation],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: any;
  @Output() changeStatus = new EventEmitter();
  @Output() editTodo = new EventEmitter();
  @Output() deleteTodo = new EventEmitter();

  isHovered = false;
  isEditing = false;

  constructor() {}

  ngOnInit(): void {}
  changeTodoStatus(element: HTMLInputElement): void {
    const id = element.id;

    const x = parseInt(element.value);
    const isCompleted = -x + 1;
    this.changeStatus.emit({ id, isCompleted });
  }

  submitEdit(event: KeyboardEvent) {
    const { keyCode } = event;
    event.preventDefault();
    if (keyCode === 13) {
      this.editTodo.emit(this.todo);
      this.isEditing = false;
    }
  }

  removeTodo(id: number) {
    this.deleteTodo.emit(id);
  }
}
