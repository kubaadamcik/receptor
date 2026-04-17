import type {Recipe} from "../Types/Recipe.ts";
import apiClient from "../lib/apiClient.ts";
import type {CreateRecipeRequest} from "../Types/CreateRecipeDto.ts";

export const recipeService =
    {
        async GetByUuid(uuid: string): Promise<Recipe | null> {
            const res = await apiClient.get<Recipe>(`/recipes/${uuid}`);

            if (res.status >= 200 && res.status < 300) {
                return res.data;
            }

            return null;
        },

        async GetAll(): Promise<Recipe[]> {
            const res = await apiClient.get<Recipe[]>("/recipes");

            if (res.status >= 200 && res.status < 300) {
                return res.data;
            }

            return [];
        },

        async Create(data: CreateRecipeRequest): Promise<string | null> {
            const res = await apiClient.post<string>("/recipes", data);

            if (res.status >= 200 && res.status < 300) {
                return res.data;
            }

            return null;
        },

        async Delete(uuid: string): Promise<boolean> {
            const res = await apiClient.delete(`/recipes/${uuid}`);

            return res.status == 204;
        },
    };