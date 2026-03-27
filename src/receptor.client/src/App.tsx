import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home.tsx";

export default function App() {
    return <div className="w-screen h-screen">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
            </Routes>
        </BrowserRouter>;
    </div>

}