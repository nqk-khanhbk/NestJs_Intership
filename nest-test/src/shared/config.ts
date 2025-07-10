import { plainToInstance } from 'class-transformer'
import { IsString, validateSync } from 'class-validator'
import fs from 'fs'
import path from 'path'
import { config } from 'dotenv'

config({
  path: '.env',
})
// Kiểm tra coi thử có file .env hay chưa
if (!fs.existsSync(path.resolve('.env'))) {
  console.log('Không tìm thấy file .env')
  process.exit(1)  //Nếu không tìm thấy file .env trong thư mục gốc → in ra lỗi và exit(1) để ngăn app tiếp tục chạy.
}


//Tạo class ConfigSchema để định nghĩa & validate biến ENV
class ConfigSchema {
  @IsString()
  DATABASE_URL: string
  @IsString()
  ACCESS_TOKEN_SECRET: string
  @IsString()
  ACCESS_TOKEN_EXPIRES_IN: string
  @IsString()
  REFRESH_TOKEN_SECRET: string
  @IsString()
  REFRESH_TOKEN_EXPIRES_IN: string
}
//Chuyển process.env → Class instance để validate
const configServer = plainToInstance(ConfigSchema, process.env, {
  enableImplicitConversion: true,
})

//Thực hiện validate & xử lý lỗi
const errorArray = validateSync(configServer)

if (errorArray.length > 0) {
  console.log('Các giá trị khai báo trong file .env không hợp lệ')
  const errors = errorArray.map((eItem) => {
    return {
      property: eItem.property,
      constraints: eItem.constraints,
      value: eItem.value,
    }
  })
  console.log(errors)
  throw errors
}
const envConfig = configServer

export default envConfig