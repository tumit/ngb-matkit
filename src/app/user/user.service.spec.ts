import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { User, UserService } from '.';


describe('UserService', () => {

  const usersMock: User[] = [
    { id: 1, username: 'john' },
    { id: 2, username: 'henry' }
  ];

  let api: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });

    api = TestBed.get(UserService);
    httpMock = TestBed.get(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(api).toBeTruthy();
  });

  it('should return all users', (done) => {
    // act && async assert
    api.findAll().subscribe(users => {
      expect(users.length).toEqual(2);
      done();
    });

    // assert
    const testReq = httpMock.expectOne(`/users`);
    expect(testReq.request.method).toBe('GET');

    // arrange
    testReq.flush(usersMock);
  });

  it('should return empty users when request has error', (done) => {

    // act && async assert
    api.findAll().subscribe(users => {
      expect(users.length).toEqual(0);
      done();
    });

    // assert
    const testReq = httpMock.expectOne('/users');
    expect(testReq.request.method).toBe('GET');

    // arrange
    testReq.flush(null, { status: 400, statusText: 'Bad Request' });
  });

  it('should return user with id=1', (done) => {
    // act && async assert
    api.findOne(1).subscribe(user => {
      expect(user).toEqual(usersMock[0]);
      done();
    });

    // assert
    const testReq = httpMock.expectOne(`/users/1`);
    expect(testReq.request.method).toBe('GET');

    // arrange
    testReq.flush(usersMock[0]);
  });

  it('should return undefined user when request has error', (done) => {

    // act && async assert
    api.findOne(3).subscribe(user => {
      expect(user).toBeFalsy();
      done();
    });

    // assert
    const testReq = httpMock.expectOne('/users/3');
    expect(testReq.request.method).toBe('GET');

    // arrange
    testReq.flush(null, { status: 400, statusText: 'Bad Request' });
  });

});
