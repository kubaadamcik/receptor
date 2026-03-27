export default function NavBar()
{
    return <nav className="flex flex-row justify-between p-4 bg-amber-50">
        <a href="/">
            <h1 className="text-xl font-bold text-gray-900">Receptor</h1>
        </a>
        <ul className="flex flex-row gap-3">
            <li>
                <a href="/">Úvod</a>
            </li>
            <li>
                <a href="/about">O nás</a>
            </li>
            <li>
                <a href="/login">Přihlásit se</a>
            </li>
        </ul>
    </nav>
}