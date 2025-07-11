import { HashingService } from 'src/shared/services/hashing.service';
import { PrismaService } from 'src/shared/services/prisma.service';
export declare class AuthService {
    private readonly hashingService;
    private readonly prismaService;
    constructor(hashingService: HashingService, prismaService: PrismaService);
    register(body: any): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        email: string;
        password: string;
    }>;
}
