import { Axios } from './axios'
import {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";

export class Api extends Axios {
  private token: string;

  public constructor(config?: AxiosRequestConfig | undefined) {
    super(config);
    this.token = "";
    // this.getToken = this.getToken.bind(this);
    this.setToken = this.setToken.bind(this);
    this.getUri = this.getUri.bind(this);
    this.request = this.request.bind(this);
    this.get = this.get.bind(this);
    this.options = this.options.bind(this);
    this.delete = this.delete.bind(this);
    this.head = this.head.bind(this);
    this.post = this.post.bind(this);
    this.put = this.put.bind(this);
    this.patch = this.patch.bind(this);
    this.success = this.success.bind(this);
    this.error = this.error.bind(this);
    this.interceptors.request.use((param) => {
      return {
          ...param,
          defaults: {
              headers: {
                  ...param.headers,
                  "Authorization": `Bearer ${this.getToken()}`
              },
          }
      }
      }, (error) => {
      // handling error
      });
  this.interceptors.response.use((param) => ({
        ...param
    }, (error) => {
        // handling error
    }));
  }

  public getToken(): string {
    return `Bearer ${this.token}`;
  }

  public setToken (token: string): void {
    this.token = token;
  }

  public getUri(config: AxiosRequestConfig): string {
    return this.getUri(config);
  }

  public request<T,R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
    return this.request(config);
    
  }

  public get<T,R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.get(url, config);
  }

  public options <T, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig):Promise<R> {
    return this.options(url, config);
  }

  public delete <T, R= AxiosResponse<T>>(url: string,config: AxiosRequestConfig):Promise<R> {
    return this.delete(url, config);
  }
  public head<T, R= AxiosResponse<T>>(url: string, config: AxiosRequestConfig): Promise<R> {
    return this.head(url, config);
  }
  public post<T, B, R=AxiosResponse<T>>(url:string, data?:B, config?: AxiosRequestConfig): Promise<R> {
    return this.post(url, data, config);
  }
  public put<T,B,R = AxiosResponse<T>>(url: string, data?:B, config?: AxiosRequestConfig): Promise<R> {
    return this.put(url, data, config);
  }
  public patch<T,B,R=AxiosResponse<T>>(url: string, data:B, config: AxiosRequestConfig): Promise<R> {
    return this.patch(url, data, config);
  }

     /**
     *
     * @template T - type.
     * @param {import("axios").AxiosResponse<T>} response - axios response.
     * @returns {T} - expected object.
     * @memberof Api
     */
     public success<T>(response: AxiosResponse<T>): T {
      return response.data;
  }
  /**
   *
   *
   * @template T type.
   * @param {AxiosError<T>} error
   * @memberof Api
   */
  public error<T> (error: AxiosError<T>): void {
      throw error;
  }
}