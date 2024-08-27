import { IsOptional } from "class-validator";

export class UpdateAdminDTO {
    @IsOptional()
    readonly name: string;
    @IsOptional()
    readonly email: string;
    @IsOptional()
    readonly login: string;
    @IsOptional()
    readonly password: string;
}
