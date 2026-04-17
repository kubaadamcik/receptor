import {Link, useNavigate} from "react-router-dom";
import NavBar from "../Components/NavBar.tsx";
import {type FormEvent, useState} from "react";
import type {RegisterDto} from "../Types/RegisterDto.ts";
import {authService} from "../Services/authService.ts";

export default function Register() {
    const navigate = useNavigate();
    
    const [email, setEmail] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const register = async (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            return;
        }
        
        const data : RegisterDto = {
            email: email,
            username: username,
            password: password
        };

        const res = await authService.register(data);

        if (res) {
            navigate("/recipes");
        }
    }
    
    return (
        <div className="h-full w-full flex flex-col bg-amber-50/40">
            <div className="w-full h-16">
                <NavBar></NavBar>
            </div>

            <main className="flex-1 px-4 py-8 md:px-8 md:py-10">
                <section
                    className="w-full max-w-md mx-auto rounded-2xl bg-white border border-amber-100 shadow-sm p-6 md:p-8">
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold text-gray-800">Registrace</h1>
                        <p className="mt-2 text-sm text-gray-500">Vytvoř si účet a ukládej své oblíbené recepty.</p>
                    </div>

                    <form className="flex flex-col gap-4" onSubmit={register}>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="registerUsername" className="text-sm font-semibold text-gray-700">Jméno</label>
                            <input
                                id="registerUsername"
                                type="text"
                                placeholder="napr. Jan Novak"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="border border-gray-200 rounded-lg px-4 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="registerEmail"
                                   className="text-sm font-semibold text-gray-700">E-mail</label>
                            <input
                                id="registerEmail"
                                type="email"
                                placeholder="napr. kuchar@receptor.cz"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="border border-gray-200 rounded-lg px-4 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="registerPassword"
                                   className="text-sm font-semibold text-gray-700">Heslo</label>
                            <input
                                id="registerPassword"
                                type="password"
                                placeholder="Alespon 8 znaku"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="border border-gray-200 rounded-lg px-4 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="registerConfirmPassword"
                                   className="text-sm font-semibold text-gray-700">Potvrzení hesla</label>
                            <input
                                id="registerConfirmPassword"
                                type="password"
                                placeholder="Zadej heslo znovu"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="border border-gray-200 rounded-lg px-4 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-2 px-6 py-2.5 bg-amber-400 text-white font-semibold rounded-lg hover:bg-amber-500 transition-colors"
                        >
                            Vytvořit účet
                        </button>
                    </form>

                    <p className="mt-5 text-sm text-gray-600 text-center">
                        Už máš účet?{" "}
                        <Link to="/login"
                              className="font-semibold text-amber-600 hover:text-amber-700 transition-colors">
                            Přihlásit se
                        </Link>
                    </p>
                </section>
            </main>
        </div>
    );
}

