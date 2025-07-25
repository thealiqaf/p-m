import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserPermissionDto {
    @IsString()
    @IsNotEmpty()
    userId: string;

    @IsString()
    @IsNotEmpty()
    label: string;

    @IsString({ each: true })
    @IsNotEmpty({ each: true })
    permissions: string[];
}
