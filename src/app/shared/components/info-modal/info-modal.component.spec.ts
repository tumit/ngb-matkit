import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoModalComponent } from './info-modal.component';
import { CoreNgxBootstrapModule } from '../../../core/core-ngx-bootstrap.module';
import { SharedModule } from '../../shared.module';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';

describe('InfoModalComponent', () => {
  let component: InfoModalComponent;
  let fixture: ComponentFixture<InfoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreNgxBootstrapModule.forRoot(),
        ModalModule
      ],
      providers: [
        BsModalRef
      ],
      declarations: [InfoModalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
