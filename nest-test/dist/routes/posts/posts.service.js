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
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../shared/services/prisma.service");
const config_1 = __importDefault(require("../../shared/config"));
let PostsService = class PostsService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    getPosts() {
        console.log(config_1.default.ACCESS_TOKEN_SECRET);
        return this.prismaService.post.findMany();
    }
    createPost(body) {
        return this.prismaService.post.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: 1
            }
        });
    }
    getPost(id) {
        return `Post ${id}`;
    }
    updatePost(id, body) {
        return `Updated post ${id}`;
    }
    deletePost(id) {
        return `Deleted post ${id}`;
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PostsService);
//# sourceMappingURL=posts.service.js.map