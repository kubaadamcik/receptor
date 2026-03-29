import NavBar from "../Components/NavBar.tsx";
import RecipePreview from "../Components/RecipePreview.tsx";

const SAMPLE_RECIPES = [
    {
        id: 1,
        name: "Svíčková na smetaně",
        description: "Tradiční česká svíčková se šlehačkou, knedlíky a brusinkami. Jedno z nejoblíbenějších českých jídel.",
        duration: "3 hodiny",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Sv%C3%AD%C4%8Dkov%C3%A1_na_smetan%C4%9B.jpg/1280px-Sv%C3%AD%C4%8Dkov%C3%A1_na_smetan%C4%9B.jpg",
    },
    {
        id: 2,
        name: "Bramborová polévka",
        description: "Hustá domácí bramborová polévka s uzeninou, mrkví a petrželkou. Ideální na studené dny.",
        duration: "45 minut",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Potato_soup.jpg/1280px-Potato_soup.jpg",
    },
    {
        id: 3,
        name: "Palačinky",
        description: "Lehké a nadýchané palačinky s džemem nebo nutellou. Skvělá snídaně nebo dezert pro celou rodinu.",
        duration: "30 minut",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/2009-04-16_palacinta_m.jpg/1280px-2009-04-16_palacinta_m.jpg",
    },
    {
        id: 4,
        name: "Guláš",
        description: "Poctivý hovězí guláš s cibulí, paprikou a kmínem. Podáváme s chlebem nebo houskovým knedlíkem.",
        duration: "2 hodiny",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Beef_goulash_%28Rindsgulasch%29.jpg/1280px-Beef_goulash_%28Rindsgulasch%29.jpg",
    },
];

export default function Recipes()
{
  return <div className="h-full w-full flex flex-col">
    <div className="w-full h-16">
      <NavBar></NavBar>
    </div>
    <div className="flex flex-col items-center flex-1 gap-8 p-8">
      <h2 className="text-3xl font-bold text-gray-800">Recepty</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {SAMPLE_RECIPES.map(recipe => (
          <RecipePreview key={recipe.id} {...recipe}/>
        ))}
      </div>
    </div>
  </div>;
}
