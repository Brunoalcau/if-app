import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Api } from "./api";

export class UserApi extends Api {
  public constructor(config?: AxiosRequestConfig) {
    super(config);
    
    // this middleware is been called right before the http request is made.
    this.interceptors.request.use((param: AxiosRequestConfig) => ({
        ...param,
    }));

    // this middleware is been called right before the response is get it by the method that triggers the request
    this.interceptors.response.use((param: AxiosResponse) => ({
        ...param
    }));
  }
}


export const userApi = new UserApi();