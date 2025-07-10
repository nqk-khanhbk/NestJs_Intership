import { PostsService } from './posts.service';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
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
    updatePost(body: any, id: string): string;
    deletePost(id: string): string;
}
