export interface APIResponse<T>{
    message?: string;
    data: T;
}
export interface IBlog{
   blogId?:any,
  title: string,
  description: string,
  link?: string,
  email:string
}