"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({
    path: '.env',
});
if (!fs_1.default.existsSync(path_1.default.resolve('.env'))) {
    console.log('Không tìm thấy file .env');
    process.exit(1);
}
class ConfigSchema {
    DATABASE_URL;
    ACCESS_TOKEN_SECRET;
    ACCESS_TOKEN_EXPIRES_IN;
    REFRESH_TOKEN_SECRET;
    REFRESH_TOKEN_EXPIRES_IN;
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConfigSchema.prototype, "DATABASE_URL", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConfigSchema.prototype, "ACCESS_TOKEN_SECRET", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConfigSchema.prototype, "ACCESS_TOKEN_EXPIRES_IN", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConfigSchema.prototype, "REFRESH_TOKEN_SECRET", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConfigSchema.prototype, "REFRESH_TOKEN_EXPIRES_IN", void 0);
const configServer = (0, class_transformer_1.plainToInstance)(ConfigSchema, process.env, {
    enableImplicitConversion: true,
});
const errorArray = (0, class_validator_1.validateSync)(configServer);
if (errorArray.length > 0) {
    console.log('Các giá trị khai báo trong file .env không hợp lệ');
    const errors = errorArray.map((eItem) => {
        return {
            property: eItem.property,
            constraints: eItem.constraints,
            value: eItem.value,
        };
    });
    console.log(errors);
    throw errors;
}
const envConfig = configServer;
exports.default = envConfig;
//# sourceMappingURL=config.js.map