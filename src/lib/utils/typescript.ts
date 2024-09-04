export function __cast<T>(data: any): T {
  return data as T;
}

export function __notypecheck(data: any) {
  return data;
}
