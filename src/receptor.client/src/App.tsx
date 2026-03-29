import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home.tsx";
import Recipes from "./Pages/Recipes.tsx";
import RecipeDetail from "./Pages/RecipeDetail.tsx";
import CreateRecipe from "./Pages/CreateRecipe.tsx";

export default function App() {
    return <div className="w-screen h-screen">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/recipes" element={<Recipes/>}></Route>
                <Route path="/recipes/:id" element={<RecipeDetail/>}></Route>
                <Route path="/recipes/create" element={<CreateRecipe/>}></Route>
            </Routes>
        </BrowserRouter>;
    </div>

}