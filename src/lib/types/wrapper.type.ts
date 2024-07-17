export type ResponseMessage = {
  ok: boolean;
  msg: string;
};

export type ResponseDataWrapper<T> = {
  data: T;
} & ResponseMessage;
