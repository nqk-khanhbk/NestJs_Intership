import { AuthService } from 'src/routes/auth/auth.service';
import { RegisterBodyDTO } from './auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(body: RegisterBodyDTO): string;
}
