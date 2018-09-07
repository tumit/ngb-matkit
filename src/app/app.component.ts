import { Component, OnInit } from '@angular/core';
import { TodoService, Todo } from './todos/todo.service';
import { UserService, User } from './users/user.service';
import { Observable } from 'rxjs';

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
    // this.todo.list().subscribe(todos => this.todos = todos);
    // this.user.list().subscribe(users => this.users = users);
  }
}
