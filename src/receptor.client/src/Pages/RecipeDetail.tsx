import NavBar from "../Components/NavBar.tsx";
import {useNavigate} from "react-router-dom";
import type {Recipe} from "../Types/Recipe.ts";
import {useEffect, useState} from "react";
import {recipeService} from "../Services/recipeService.ts";

export default function RecipeDetail() {
  const uuid : string = window.location.href.split("/")[4];
  const navigate = useNavigate();
  
  console.log(uuid);

  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getRecipe = async () => {
      try {
        setRecipe(await recipeService.GetByUuid(uuid));
      } finally {
        setIsLoading(false);
      }
    };
    
    getRecipe();
  }, [uuid]);

  if (!isLoading && recipe === null) {
    return (
      <div className="h-full w-full flex flex-col bg-amber-50/40">
        <div className="w-full h-16">
          <NavBar></NavBar>
        </div>

        <div className="w-full flex-1 px-4 py-6 md:px-8 md:py-8">
          <div className="max-w-3xl mx-auto flex flex-col gap-6">
            <button
              onClick={() => navigate("/recipes")}
              className="self-start flex items-center gap-1 text-sm text-amber-600 hover:text-amber-700 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
              </svg>
              Zpět na recepty
            </button>

            <section className="rounded-2xl bg-white shadow-sm border border-red-200 p-6 md:p-8">
              <h1 className="text-2xl font-bold text-gray-800">Recept se nepodařilo načíst</h1>
              <p className="mt-2 text-gray-600">Recept nebyl nalezen nebo došlo k chybě při načítání.</p>
            </section>
          </div>
        </div>
      </div>
    );
  }

  if (recipe === null) {
    return (
      <div className="h-full w-full flex flex-col bg-amber-50/40">
        <div className="w-full h-16">
          <NavBar></NavBar>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full flex flex-col bg-amber-50/40">
      <div className="w-full h-16">
        <NavBar></NavBar>
      </div>

      <div className="w-full flex-1 px-4 py-6 md:px-8 md:py-8">
        <div className="max-w-6xl mx-auto flex flex-col gap-6">
          <button
            onClick={() => navigate("/recipes")}
            className="self-start flex items-center gap-1 text-sm text-amber-600 hover:text-amber-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
            </svg>
            Zpět na recepty
          </button>

          <section className="rounded-2xl bg-white shadow-sm border border-amber-100 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-full bg-gray-100">
                <img
                  src={recipe.image_url ?? "https://via.placeholder.com/1200x800?text=Recipe"}
                  alt={recipe.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 md:p-8 flex flex-col gap-4">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{recipe.name}</h1>
                <p className="text-gray-600 leading-relaxed">{recipe.description}</p>

                <div className="grid grid-cols-2 gap-3 pt-2 text-sm text-gray-700">
                  <div className="rounded-lg bg-amber-50 px-3 py-2">Čas: {recipe.time} min</div>
                  <div className="col-span-2 text-right text-[10px] tracking-wide text-gray-300/80 select-text">#{recipe.uuid}</div>
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl bg-white shadow-sm border border-amber-100 p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ingredience</h2>
              <ul className="grid gap-2 sm:grid-cols-2">
                {recipe.ingredients.map((ingredient) => (
                  <li key={ingredient} className="rounded-lg border border-gray-200 px-3 py-2 text-gray-700 bg-gray-50">
                    {ingredient}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl bg-white shadow-sm border border-amber-100 p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Postup</h2>
              <ol className="space-y-3">
                {recipe.process.map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="mt-0.5 h-6 w-6 rounded-full bg-amber-500 text-white text-xs font-semibold flex items-center justify-center">
                      {index + 1}
                    </span>
                    <p className="text-gray-700 leading-relaxed">{step}</p>
                  </li>
                ))}
              </ol>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
}
