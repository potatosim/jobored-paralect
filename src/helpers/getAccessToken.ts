import axios from 'axios';
import { ApiEndpoints } from 'enum/ApiEndpoints';
import { LocalStorageKeys } from 'enum/LocalStorageKeys';

interface GetTokenResponse {
  access_token: string;
  expires_in: number;
}

// 7 days
const TOKEN_EXPIRATION_TIME = 7 * 24 * 60 * 60 * 1000;

const checkStoredToken = (): boolean =>
  !!localStorage.getItem(LocalStorageKeys.AccessToken) &&
  +localStorage.getItem(LocalStorageKeys.TokenExpirationDate)! > new Date().getTime();

export const getAccessToken = async () => {
  if (!checkStoredToken()) {
    const { data } = await axios.get<GetTokenResponse>(
      `${process.env.REACT_APP_BASE_URL}${ApiEndpoints.Authorization}`,
      {
        params: {
          login: process.env.REACT_APP_LOGIN,
          password: process.env.REACT_APP_PASSWORD,
          client_id: process.env.REACT_APP_CLIENT_ID,
          client_secret: process.env.REACT_APP_CLIENT_SECRET,
          hr: process.env.REACT_APP_HR,
        },
        headers: {
          'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
          'X-Api-App-Id': process.env.CLIENT_SECRET,
        },
      },
    );

    localStorage.setItem(LocalStorageKeys.AccessToken, data.access_token);
    localStorage.setItem(
      LocalStorageKeys.TokenExpirationDate,
      (new Date().getTime() + TOKEN_EXPIRATION_TIME).toString(),
    );

    return data.access_token;
  }

  return localStorage.getItem(LocalStorageKeys.AccessToken)!;
};
