import axios, { AxiosInstance } from 'axios';
import { SessionStorageKeys } from 'enum/SessionStorageKeys';

export default class BaseApi {
  protected readonly instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      headers: {
        'x-secret-key': process.env.REACT_APP_X_SECRET_KEY,
        'X-Api-App-Id': process.env.REACT_APP_CLIENT_SECRET,
        Authorization: `Bearer ${sessionStorage.getItem(SessionStorageKeys.ACCESS_TOKEN_KEY)}`,
      },
    });
  }
}
