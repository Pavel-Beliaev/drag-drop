export type ItemsType = {
  fact: string;
};

export type fetchDataType = {
  data: ItemsType[];
  last_page: number;
};

export type PostSliceState = {
  posts: ItemsType[];
  status: Status;
  totalPages: number;
  currentPage: number;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}
