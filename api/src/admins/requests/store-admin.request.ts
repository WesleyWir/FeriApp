import { IsNotEmpty } from "class-validator";

export class StoreAdminRequest {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly login: string;

  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;
}
