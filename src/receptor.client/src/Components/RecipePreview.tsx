import {useNavigate} from "react-router-dom";

interface RecipePreviewProps {
    id: number;
    name: string;
    description: string;
    duration: string;
    imageUrl: string;
}

export default function RecipePreview({id, name, description, duration, imageUrl}: RecipePreviewProps) {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/recipes/${id}`)}
            className="flex flex-col rounded-xl overflow-hidden shadow-md border border-amber-100 bg-white cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-200 w-72"
        >
            <img src={imageUrl} alt={name} className="w-full h-44 object-cover"/>
            <div className="flex flex-col gap-2 p-4">
                <h3 className="text-lg font-bold text-gray-800">{name}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
                <div className="flex items-center gap-1 mt-1 text-amber-500 text-sm font-medium">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/>
                    </svg>
                    {duration}
                </div>
            </div>
        </div>
    );
};