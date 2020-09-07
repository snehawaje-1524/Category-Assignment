import { TestBed, inject } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

const dummyData = [
  {
    id: '1',
    email: 'dummy@gmail.com',
    password: 'dummy',
  },
];

describe('AuthService', () => {
  let service: AuthService;
  let httpTestingMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });
    service = TestBed.inject(AuthService);
  });

  beforeEach(inject(
    [AuthService, HttpTestingController],
    (authService, httpMock) => {
      service = authService;
      httpTestingMock = httpMock;
    }
  ));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login for a valid user', () => {
    const testUser = {
      id: '1',
      email: 'test@gmail.com',
      password: 'test',
    };
    service
      .login({
        email: 'test@gmail.com',
        password: 'test',
      })
      .subscribe((user) => {
        expect(user).toBeDefined();
        expect(user.length).toBe(1);
      });
    const req = httpTestingMock.expectOne(
      'http://localhost:3000/users?email=' +
      testUser.email +
      '&password=' +
      testUser.password
    );
    req.flush(dummyData);
    httpTestingMock.verify();
  });

  it('signup - user should get signed up with provided credentials ', () => {
    const testUser = {
      email: 'test@gmail.com',
      password: 'test',
    };
    service.register(testUser).subscribe((user) => {
      expect(user).toBeDefined();
      expect(user.id).toBeDefined();
      expect(user.email).toBe(testUser.email);
      expect(user.password).toBe(testUser.password);
    });
    const req = httpTestingMock.expectOne('http://localhost:3000/users');
    req.flush(dummyData);
    httpTestingMock.verify();
  });

});
