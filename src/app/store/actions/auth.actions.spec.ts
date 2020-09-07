import { AuthActionTypes, LogIn, Register, LogInSuccess, LogInFailure, RegisterSuccess, RegisterFailure, LogOut } from './auth.actions';

describe('LogIn', () => {
    it('should create an action of type login', () => {
        const testUser = {
            email: 'test@test.com',
            password: 'test',
            id: 3,
        };
        const action = new LogIn(testUser);
        expect(action.type).toEqual(AuthActionTypes.LOGIN);
    });
});

describe('LogInSuccess', () => {
    it('should create an action of type Login Success', () => {
        const testUser = {
            email: 'test@test.com',
            password: 'test',
            id: 3,
        };
        const action = new LogInSuccess(testUser);
        expect(action.type).toEqual(AuthActionTypes.LOGIN_SUCCESS);
    });
});

describe('LogInFailure', () => {
    it('should create an action of type Login Failure', () => {
        const testUser = {
            email: 'test@test.com',
            password: 'test',
            id: 3,
        };
        const action = new LogInFailure(testUser);
        expect(action.type).toEqual(AuthActionTypes.LOGIN_FAILURE);
    });
});

describe('Register', () => {
    it('should create an action of type register user', () => {
        const testUser = {
            email: 'test@test.com',
            password: 'test',
            id: 3,
        };
        const action = new Register(testUser);
        expect(action.type).toEqual(AuthActionTypes.REGISTER);
    });
});

describe('RegisterSuccess', () => {
    it('should create an action of type [Auth] SignUp Success', () => {
        const testUser = {
            email: 'test@test.com',
            password: 'test',
            id: 3,
        };
        const action = new RegisterSuccess(testUser);
        expect(action.type).toEqual(AuthActionTypes.REGISTER_SUCCESS);
    });
});

describe('SignUpFailure', () => {
    it('should create an action of type [Auth] SignUp Failure', () => {
        const testUser = {
            email: 'test@test.com',
            password: 'test',
            id: 3,
        };
        const action = new RegisterFailure(testUser);
        expect(action.type).toEqual(AuthActionTypes.REGISTER_FAILURE);
    });
});

describe('Logout', () => {
    it('should create an action of type LogOut', () => {
        const action = new LogOut();
        expect(action.type).toEqual(AuthActionTypes.LOGOUT);
    });
});

