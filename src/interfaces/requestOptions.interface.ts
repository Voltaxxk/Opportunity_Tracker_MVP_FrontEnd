import type { Method } from "../types/MethodTypes";

export interface RequestOptions {
  method?: Method;
  body?: any;
  headers?: HeadersInit;
  query?: Record<string, string | undefined>;
}