import NavBar from "../Components/NavBar.tsx";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {recipeService} from "../Services/recipeService.ts";
import type {CreateRecipeDto, CreateRecipeRequest} from "../Types/CreateRecipeDto.ts";
import {authService} from "../Services/authService.ts";
export default function CreateRecipe()
{
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [time, setTime] = useState<number>(0);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [ingredients, setIngredients] = useState<string[]>([""]);
  const [steps, setSteps] = useState<string[]>([""]);

  useEffect(() => {
    const getAuthState = async () => {
      const authState = await authService.me() !== null;

      if (!authState) {
        navigate("/login");
      }
    };
    
    getAuthState();
  }, [navigate]);
  
  const createRecipe = async () => {
    const recipeDto: CreateRecipeDto = {
      name: name,
      description: description,
      time: time,
      userUuid : await authService.me(),
      ingredients: ingredients.filter(ing => ing.trim() !== ""),
      process: steps.filter(step => step.trim() !== ""),
      imagePath: imagePreview ?? ""
    };
    const request: CreateRecipeRequest = {
      recipeDto,
    };
    const res = await recipeService.Create(request);
    if (res) {
      navigate("/recipes");
    }
  }

  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-full h-16">
        <NavBar></NavBar>
      </div>

      <div className="flex flex-col items-center flex-1 gap-4 p-8">
        <button
          onClick={() => navigate("/recipes")}
          className="self-start flex items-center gap-1 text-sm text-amber-500 hover:text-amber-600 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
          </svg>
          Zpět na recepty
        </button>

        <div className="w-full max-w-2xl flex flex-col gap-8">
          <h1 className="text-3xl font-bold text-gray-800">Nový recept</h1>

          {/* Název */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700">Název receptu</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Např. Svíčková na smetaně"
              className="border border-gray-200 rounded-lg px-4 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
            />
          </div>

          {/* Popis */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700">Popis</label>
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Krátký popis receptu..."
              rows={3}
              className="border border-gray-200 rounded-lg px-4 py-2.5 text-gray-800 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
            />
          </div>

          {/* Čas přípravy */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700">Čas přípravy (minuty)</label>
            <input
              type="number"
              value={time}
              onChange={e => setTime(parseInt(e.target.value) || 0)}
              placeholder="Např. 30"
              className="border border-gray-200 rounded-lg px-4 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
            />
          </div>

          {/* Fotografie */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700">
              Fotografie
              <span className="ml-1 text-xs font-normal text-gray-400">(volitelné)</span>
            </label>
            {imagePreview ? (
              <div className="relative w-full h-56 rounded-xl overflow-hidden">
                <img src={imagePreview} alt="Náhled" className="w-full h-full object-cover"/>
                <button
                  onClick={() => setImagePreview(null)}
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white text-gray-600 rounded-full p-1.5 transition"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center gap-2 w-full h-36 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:border-amber-400 hover:bg-amber-50 transition">
                <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <span className="text-sm text-gray-400">Klikněte pro nahrání fotografie</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={e => {
                    const file = e.target.files?.[0];
                    if (file) setImagePreview(URL.createObjectURL(file));
                  }}
                />
              </label>
            )}
          </div>

          {/* Ingredience */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Ingredience</label>
            <div className="flex flex-col gap-2">
              {ingredients.map((ingredient, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold text-sm w-5 text-right shrink-0">{i + 1}.</span>
                  <input
                    type="text"
                    value={ingredient}
                    placeholder="Např. 500 g hovězího masa"
                    onChange={e => {
                      const updated = [...ingredients];
                      updated[i] = e.target.value;
                      setIngredients(updated);
                    }}
                    className="flex-1 border border-gray-200 rounded-lg px-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                  />
                  {ingredients.length > 1 && (
                    <button
                      onClick={() => setIngredients(ingredients.filter((_, j) => j !== i))}
                      className="text-gray-300 hover:text-red-400 transition"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                      </svg>
                    </button>
                  )}
                </div>
              ))}
            </div>
            <button
              onClick={() => setIngredients([...ingredients, ""])}
              className="self-start flex items-center gap-1.5 text-sm text-amber-500 hover:text-amber-600 transition-colors mt-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/>
              </svg>
              Přidat ingredienci
            </button>
          </div>

          {/* Postup */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Postup</label>
            <div className="flex flex-col gap-3">
              {steps.map((step, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="mt-2.5 text-amber-400 font-bold text-sm w-5 text-right shrink-0">{i + 1}.</span>
                  <textarea
                    value={step}
                    placeholder={`Krok ${i + 1}...`}
                    rows={2}
                    onChange={e => {
                      const updated = [...steps];
                      updated[i] = e.target.value;
                      setSteps(updated);
                    }}
                    className="flex-1 border border-gray-200 rounded-lg px-4 py-2 text-gray-800 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                  />
                  {steps.length > 1 && (
                    <button
                      onClick={() => setSteps(steps.filter((_, j) => j !== i))}
                      className="mt-2.5 text-gray-300 hover:text-red-400 transition"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                      </svg>
                    </button>
                  )}
                </div>
              ))}
            </div>
            <button
              onClick={() => setSteps([...steps, ""])}
              className="self-start flex items-center gap-1.5 text-sm text-amber-500 hover:text-amber-600 transition-colors mt-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/>
              </svg>
              Přidat krok
            </button>
          </div>

          {/* Akce */}
          <div className="flex gap-3 pb-8">
            <button
              onClick={() => navigate("/recipes")}
              className="px-5 py-2.5 border border-gray-200 text-gray-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Zrušit
            </button>
            <button
              onClick={createRecipe}
              className="px-6 py-2.5 bg-amber-400 text-white font-semibold rounded-lg hover:bg-amber-500 transition-colors"
            >
              Vytvořit recept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
