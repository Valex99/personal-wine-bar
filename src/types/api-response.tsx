export type APIBaseResponse = {
  ok: boolean;
  status: number;
};

// Define the extended response type for successful responses
type APISuccessResponse<T> = APIBaseResponse & {
  ok: true;
  payload: T;
};

// Define the response type for unsuccessful responses
type APIErrorResponse = APIBaseResponse & {
  ok: false;
  error: string;
};

// Union type for the overall response
export type APIResponse<T> = APISuccessResponse<T> | APIErrorResponse;

export type SearchParams = Record<string, string | string[] | undefined>;

export type PaginationMeta = {
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  sortColumn: string | null;
  sortOrder: string;
};

export type PaginationData = {
  meta: PaginationMeta;
  filters: SearchParams;
};

export type PaginatedResponse<T> = {
  data: T;
  pagination: PaginationData;
};
