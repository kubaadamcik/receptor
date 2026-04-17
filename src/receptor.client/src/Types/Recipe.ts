export type Recipe = {
    uuid: string;
    name: string;
    description: string;
    time: number;
    ingredients: string[];
    process: string[];
    image_url: string | null;
};

