export interface IBaseService<T> {
  getAll(skip: number, limit: number): Promise<T[]>;
  get(uid: string): Promise<T>;
  update(entity: T): Promise<T>;
  create(entity: T): Promise<string>;
  delete(uid: string);
}
