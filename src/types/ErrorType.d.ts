export interface AxiosHelper {
  message?: string;
  status?: number;
}

export interface AxiosApiError extends AxiosHelper {}

export interface AxiosApiSuccess extends AxiosHelper {}
