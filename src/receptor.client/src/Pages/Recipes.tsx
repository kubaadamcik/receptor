import NavBar from "../Components/NavBar.tsx";
import RecipePreview from "../Components/RecipePreview.tsx";
import {useEffect, useState} from "react";
import type {Recipe} from "../Types/Recipe.ts";
import {recipeService} from "../Services/recipeService.ts";
import {Link} from "react-router-dom";


export default function Recipes() {
    const [recipes, setRecipes] = useState<Recipe[]>([])


    
    useEffect(() => {
        const getRecipes = async () => {
            setRecipes(await recipeService.GetAll());

        }
        getRecipes();
    }, []);

    return <div className="h-full w-full flex flex-col">
        <div className="w-full h-16">
            <NavBar></NavBar>
        </div>
        <div className="flex flex-col items-center flex-1 gap-8 p-8">
            <div className="w-full max-w-6xl flex items-center justify-between gap-4">
                <h2 className="text-3xl font-bold text-gray-800">Recepty</h2>
                <Link
                    to="/recipes/create"
                    className="px-4 py-2 bg-amber-400 text-white font-semibold rounded-full hover:bg-amber-500 transition-colors"
                >
                    Vytvořit nový recept
                </Link>
            </div>
            <div className="flex flex-wrap gap-6 justify-center">
                {recipes.map(recipe => (
                    <RecipePreview recipe={recipe}/>
                ))}
            </div>
        </div>
    </div>;
}
