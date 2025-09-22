import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { loggerInterceptors } from './interceptors/loggerInterceptor';

interface AxiosServerConfig extends AxiosRequestConfig {
  applyInterceptors?: (instance: AxiosInstance) => void;
}

export class AxiosService {
  private static instances: Map<string, AxiosInstance> = new Map<string, AxiosInstance>();

  public static getInstance(
    name: string,
    config: AxiosServerConfig
  ): AxiosInstance {
    if (AxiosService.instances.has(name)) {
      const instance = AxiosService.instances.get(name)!;
      if (config.headers) {
        instance.defaults.headers.common = {
          ...instance.defaults.headers.common,
          ...config.headers,
        };
      }

      return instance;
    }

    const { applyInterceptors, ...axiosConfig } = config;

    const headers = axiosConfig.headers ? { ...axiosConfig.headers } : undefined;

    const instance = axios.create({
      baseURL: config.baseURL,
      ...axiosConfig,
      headers,
    });
    instance.defaults.headers.common = {
      ...headers,
    };

    // Add custom interceptors
    applyInterceptors?.(instance);
    loggerInterceptors(instance);

    AxiosService.instances.set(name, instance);
    return instance;
  }

  // Optional: Remove an instance
  public static removeInstance(name: string): void {
    AxiosService.instances.delete(name);
  }
}
