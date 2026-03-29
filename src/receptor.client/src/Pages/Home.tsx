import NavBar from "../Components/NavBar.tsx";
import {useNavigate} from "react-router-dom";

export default function Home()
{
  const navigate = useNavigate();

  return <div className="h-full w-full flex flex-col">
    <div className="w-full h-16">
      <NavBar></NavBar>
    </div>
    <div className="flex flex-col items-center justify-center flex-1 gap-6">
      <h2 className="text-4xl font-bold text-gray-800">Vítejte v Receptoru</h2>
      <p className="text-lg text-gray-500">Najděte a prozkoumejte své oblíbené recepty.</p>
      <button
        onClick={() => navigate("/recipes")}
        className="px-6 py-3 bg-amber-400 text-white font-semibold rounded-lg hover:bg-amber-500 transition-colors"
      >
        Procházet recepty
      </button>
    </div>
  </div>;
}