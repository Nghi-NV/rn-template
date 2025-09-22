import { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { NConsole } from 'react-native-nconsole';

export const loggerInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      NConsole.groupCollapsed(
        `%c${config.method?.toUpperCase()} ${config.url}`,
        'color: green',
      );
      NConsole.log(`request time: ${new Date().toISOString()}`);
      NConsole.log('baseURL:', config.baseURL);
      NConsole.log('headers:', config.headers);


      if (config.method?.toLowerCase() === 'get') {
        NConsole.log('queryParameters:', config.params);
      } else {
        NConsole.log('data:', config.data);
      }
      NConsole.groupEnd();

      return config;
    },
    (error) => Promise.reject(error)
  );

  instance.interceptors.response.use(
    (response) => {
      NConsole.groupCollapsed(
        `%cRESPONSE[${response.status}] ${response.config.method?.toUpperCase()} ${response.config.url}`,
        'color: DodgerBlue',
      );
      NConsole.log('baseURL:', response.config.baseURL);
      NConsole.log('message:', response.statusText);
      NConsole.log(`response time: ${new Date().toISOString()}`);
      NConsole.log('data:', response.data);
      NConsole.groupEnd();

      return response;
    },
    (error) => {
      NConsole.groupCollapsed(
        `%cERROR[${error.code}] ${error.config.method?.toUpperCase()} ${error.config.url}`,
        'color: red',
      );
      NConsole.log('baseURL:', error.config.baseURL);
      NConsole.log('message:', error.message);
      NConsole.log(`response time: ${new Date().toISOString()}`);
      if (error.response?.config.method?.toLowerCase() === 'get') {
        NConsole.log('params:', error.response?.config.params);
      } else {
        NConsole.log('data:', error.response?.data);
      }
      NConsole.groupEnd();

      return Promise.reject(error);
    }
  );
};
