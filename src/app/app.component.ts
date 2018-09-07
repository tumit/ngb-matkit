import { Component, OnInit } from '@angular/core';

import { UserService, User } from './user';
import { Observable } from 'rxjs';
import { Todo, TodoService } from './todo';

@Component({
  selector: 'ngb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todos$: Observable<Todo[]>;
  users$: Observable<User[]>;

  constructor(private todoService: TodoService, private userService: UserService) { }

  ngOnInit() {
    this.todos$ = this.todoService.list();
    this.users$ = this.userService.list();
  }
}
