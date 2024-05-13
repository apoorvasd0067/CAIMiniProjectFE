export interface APIResponse<T>{
    message?: string;
    data: T;
}
export interface IUser{
  
  "email": string,
  "fullName": string,
  "password": string
  
}