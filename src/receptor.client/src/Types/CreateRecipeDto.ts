export type CreateRecipeDto = {
    name: string;
    description: string;
    userUuid: string | null;
    imagePath: string;
    time: number;
    ingredients: string[];
    process: string[];
};

export type CreateRecipeRequest = {
    recipeDto: CreateRecipeDto;
};

