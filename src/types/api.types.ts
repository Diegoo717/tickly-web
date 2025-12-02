import type { Event } from "./event.types";

export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: number;
}

export interface EventsApiResponse{
  succes: string;
  count: number;
  events: Event[];
}

export interface ApiError {
  message: string;
  status?: number;
  code?: string;
}

export interface UseQueryResult<T> {
  data: T | null;
  loading: boolean;
  error: ApiError | null;
}