import SearchBar from "./SearchBar.tsx";
import {Link} from "react-router-dom";
import {authService} from "../Services/authService.ts";
import {useEffect, useState} from "react";

export default function NavBar() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
    useEffect(() => {
        const getAuthState = async () => {
            setIsAuthenticated(await authService.me() !== null)
        };

        getAuthState();
        
    }, []);


    return (
        <nav
            className="flex flex-row items-center justify-between px-6 py-3 bg-amber-50 border-b border-amber-200 shadow-sm">
            <Link to="/">
                <h1 className="text-2xl font-extrabold text-amber-500 tracking-tight">Receptor</h1>
            </Link>

            <SearchBar/>

            <ul className="flex flex-row items-center gap-6 text-sm font-medium text-gray-600">
                <li>
                    <Link to="/" className="hover:text-amber-500 transition-colors">Úvod</Link>
                </li>
                <li>
                    <Link to="/recipes" className="hover:text-amber-500 transition-colors">Recepty</Link>
                </li>
                <li>
                    {isAuthenticated ? <button onClick={authService.logout}
                                               className="px-4 py-1.5 bg-amber-400 text-white rounded-full hover:bg-amber-500 transition-colors">
                            Odhlásit se
                        </button>
                        : <Link to="/login"
                                className="px-4 py-1.5 bg-amber-400 text-white rounded-full hover:bg-amber-500 transition-colors">
                            Přihlásit se
                        </Link>}

                </li>
            </ul>
        </nav>
    );
}