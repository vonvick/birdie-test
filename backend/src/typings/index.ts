export interface PaginationResult {
  currentPage: number;
  pageCount: number;
  pageSize: number;
  totalCount: number;
}

export interface EventTypesInterface {
  id: string;
  fields: string[];
}
