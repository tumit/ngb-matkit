import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';

import { InfoModalComponent } from './shared/components/info-modal/info-modal.component';
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

  // bs-modal
  bsModalRef: BsModalRef;

  constructor(
    public translate: TranslateService,
    private modalService: BsModalService,
    private todoService: TodoService,
    private userService: UserService) { }

  ngOnInit() {
    this.translate.use('th_TH');
    this.todos$ = this.todoService.list();
    this.users$ = this.userService.list();
    this.today = new Date;
  }

  openInfoModal() {
    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(InfoModalComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
