import { IReadable } from "./IReadable";
import { IWritable } from "./IWritable";

export interface IBaseRepository<T> extends IReadable<T>, IWritable<T> {}
