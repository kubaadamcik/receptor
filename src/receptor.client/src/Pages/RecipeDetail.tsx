import NavBar from "../Components/NavBar.tsx";
import {useParams, useNavigate} from "react-router-dom";

export default function RecipeDetail()
{
  const {id} = useParams();
  const navigate = useNavigate();

  return <div className="h-full w-full flex flex-col">
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
      <p className="text-gray-400 text-sm">Recept #{id} — tato stránka bude napojena na backend.</p>
    </div>
  </div>;
}
