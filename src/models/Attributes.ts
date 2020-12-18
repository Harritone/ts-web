import { UserProps } from './User';

export class Attributes<T> {
  constructor(private data: T) {}

  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }
}

const attr = new Attributes<UserProps>({ id: 3, name: 'max', age: 30 });
const age = attr.get('age');
const name = attr.get('name');
const id = attr.get('id');
