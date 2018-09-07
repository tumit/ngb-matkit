import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';

import { Todo, TodoService } from '.';


describe('TodoService', () => {

  const todosMock: Todo[] = [
    { id: 1, title: 'my title' },
    { id: 2, title: 'your title' }
  ];

  let api: TodoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TodoService]
    });

    api = TestBed.get(TodoService);
    httpMock = TestBed.get(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', inject([TodoService], (service: TodoService) => {
    expect(service).toBeTruthy();
  }));

  it('should return todos', (done) => {
    // act && async assert
    api.findAll().subscribe(todos => {
      expect(todos.length).toEqual(2);
      done();
    });

    // assert
    const testReq = httpMock.expectOne(`/todos`);
    expect(testReq.request.method).toBe('GET');

    // arrange
    testReq.flush(todosMock);
  });

  it('should return todo with id=1', (done) => {
    // act && async assert
    api.findOne(1).subscribe(todo => {
      expect(todo).toEqual(todosMock[0]);
      done();
    });

    // assert
    const testReq = httpMock.expectOne(`/todos/1`);
    expect(testReq.request.method).toBe('GET');

    // arrange
    testReq.flush(todosMock[0]);
  });

  it('should return empty findAll when todos request has error', (done) => {

    // act && async assert
    api.findAll().subscribe(todos => {
      expect(todos.length).toEqual(0);
      done();
    });

    // assert
    const testReq = httpMock.expectOne('/todos');
    expect(testReq.request.method).toBe('GET');

    // arrange
    testReq.flush(null, { status: 400, statusText: 'Bad Request' });
  });

  it('should return ??? when todos/3 request has error', (done) => {

    // act && async assert
    api.findOne(3).subscribe(todo => {
      expect(todo).toBeFalsy();
      done();
    });

    // assert
    const testReq = httpMock.expectOne('/todos/3');
    expect(testReq.request.method).toBe('GET');

    // arrange
    testReq.flush(null, { status: 400, statusText: 'Bad Request' });
  });

});
