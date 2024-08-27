import { IsNotEmpty } from "class-validator";

export class CreateAdminDTO {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly login: string;

  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;
}
