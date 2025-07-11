import { IsString } from "class-validator"

export class LoginBodyDTP {
    @IsString()
    email: string
    @IsString()
    password: string
}
export class RegisterBodyDTO extends LoginBodyDTP {
    @IsString({ message: 'Tên phải là chuỗi' })
    name: string
    @IsString()
    confirmPassword: string

}