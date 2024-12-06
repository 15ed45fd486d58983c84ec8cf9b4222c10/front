export interface IRegisterRequest {
    email: string;
    username: string;
    password: string;
    passwordRepeat: string;
}
export interface IRegisterResponse {
    accessToken: string;
}
