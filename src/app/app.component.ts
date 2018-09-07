import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { Todo, TodoService } from './todo';
import { User, UserService } from './user';

@Component({
  selector: 'ngb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ngb-matkit';
  todos$: Observable<Todo[]>;
  users$: Observable<User[]>;
  today: Date;

  constructor(
    public translate: TranslateService,
    private todoService: TodoService,
    private userService: UserService) { }

  ngOnInit() {
    this.translate.use('th_TH');
    this.todos$ = this.todoService.list();
    this.users$ = this.userService.list();
    this.today = new Date;
  }
}
