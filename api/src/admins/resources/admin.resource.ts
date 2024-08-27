import { Exclude, Expose } from 'class-transformer';

export class AdminResource {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  email: string;

  @Exclude()
  password: string;
}