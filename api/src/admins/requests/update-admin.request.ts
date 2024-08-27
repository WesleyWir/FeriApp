import { IsOptional } from "class-validator";

export class UpdateAdminRequest {
    @IsOptional()
    readonly name: string;
    @IsOptional()
    readonly email: string;
    @IsOptional()
    readonly login: string;
    @IsOptional()
    readonly password: string;
}
