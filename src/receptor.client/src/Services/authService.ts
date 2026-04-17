import apiClient from "../lib/apiClient.ts";
import type {LoginDto} from "../Types/LoginDto.ts";
import type {RegisterDto} from "../Types/RegisterDto.ts";

type AuthResponse = string | { token?: string; accessToken?: string } | null;

function extractToken(data: AuthResponse): string | null {
    if (!data) {
        return null;
    }

    if (typeof data === "string") {
        return data;
    }

    if (typeof data.token === "string") {
        return data.token;
    }

    if (typeof data.accessToken === "string") {
        return data.accessToken;
    }

    return null;
}

export const authService = {
    async login(data: LoginDto): Promise<boolean> {
        const res = await apiClient.post<AuthResponse>("auth/login", data);
        const token = extractToken(res.data);

        if (token) {
            console.log(token);
            localStorage.setItem("token", token);
            return true;
        }
        
        return false;
    },

    async register(data: RegisterDto): Promise<boolean> {
        const res = await apiClient.post<AuthResponse>("auth/register", data);
        const token = extractToken(res.data);

        if (token) {
            localStorage.setItem("token", token);
            return true;
        }
        
        return false;
    },

    async me(): Promise<string | null> {
        try {
            const res = await apiClient.get("auth/me");
            return res.data;
        } catch (exception)
        {
            console.log(exception);
            return null;
        }
        
    },

    getToken(): string | null {
        return localStorage.getItem("token");
    },
    
    logout() {
        localStorage.removeItem("token");
        
        window.location.reload();
    }
}