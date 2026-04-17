import {Link, useNavigate} from "react-router-dom";
import NavBar from "../Components/NavBar.tsx";
import {authService} from "../Services/authService.ts";
import type {LoginDto} from "../Types/LoginDto.ts";
import {type FormEvent, useState} from "react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const login = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const data : LoginDto = {
      email: email,
      password: password
    }
    const res = await authService.login(data);

    if (res) {
      navigate("/recipes")
    }
  }
  
  return (
    <div className="h-full w-full flex flex-col bg-amber-50/40">
      <div className="w-full h-16">
        <NavBar></NavBar>
      </div>

      <main className="flex-1 px-4 py-8 md:px-8 md:py-10">
        <section className="w-full max-w-md mx-auto rounded-2xl bg-white border border-amber-100 shadow-sm p-6 md:p-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Přihlášení</h1>
            <p className="mt-2 text-sm text-gray-500">Přihlaš se a pokračuj ve vaření.</p>
          </div>

          <form className="flex flex-col gap-4" onSubmit={login}>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm font-semibold text-gray-700">E-mail</label>
              <input
                id="email"
                type="email"
                placeholder="napr. kuchar@receptor.cz"
                value={email}
                onChange={e => {setEmail(e.target.value)}}
                className="border border-gray-200 rounded-lg px-4 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-sm font-semibold text-gray-700">Heslo</label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={e => {setPassword(e.target.value)}}
                className="border border-gray-200 rounded-lg px-4 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
              />
            </div>

            <button
              type="submit"
              className="mt-2 px-6 py-2.5 bg-amber-400 text-white font-semibold rounded-lg hover:bg-amber-500 transition-colors"
            >
              Přihlásit se
            </button>
          </form>

          <p className="mt-5 text-sm text-gray-600 text-center">
            Nemáš účet?{" "}
            <Link to="/register" className="font-semibold text-amber-600 hover:text-amber-700 transition-colors">
              Registrovat
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
}

