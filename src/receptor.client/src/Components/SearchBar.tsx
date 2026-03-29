export default function SearchBar() {
    return (
        <div className="flex items-center w-80 bg-white rounded-full px-4 py-1.5 shadow-sm border border-amber-200">
            <svg className="w-4 h-4 text-gray-400 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/>
            </svg>
            <input
                type="text"
                placeholder="Hledat recepty..."
                className="w-full text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
            />
        </div>
    );
};