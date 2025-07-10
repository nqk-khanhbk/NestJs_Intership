import { PrismaService } from 'src/shared/services/prisma.service';
export declare class PostsService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getPosts(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        title: string;
        content: string;
        authorId: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    createPost(body: any): import(".prisma/client").Prisma.Prisma__PostClient<{
        id: number;
        title: string;
        content: string;
        authorId: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    getPost(id: string): string;
    updatePost(id: string, body: any): string;
    deletePost(id: string): string;
}
