export type SuccessResult<T> = {
  status: 'OK';
  value: T;
};

export type ErrorResult = {
  status: 'FAIL';
  message: string;
};

export type Result<T> = SuccessResult<T> | ErrorResult;
