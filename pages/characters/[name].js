import CharacterStats from "../../components/CharacterStats/CharacterStats";
import { fetchAPI } from "../../lib/api";
import { fetchImageAsBase64 } from "../../lib/image";

export default function Character({ character }) {
  return (
    <div>
      <h1 className="text-center text-4xl font-medium">{ character.Name }</h1>
      <div className="flex flex-row-reverse">
        <aside className="w-1/5 border sticky h-full top-4 m-2 mb-4 border-gray-300">
          <CharacterStats character={ character } imageScale="4" />
        </aside>
        <div className="w-4/5">
          { character.Content }
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const character = await fetchAPI(`/characters?Slug=${params.name}`);
  character[0].Image.base64 = await fetchImageAsBase64(character[0].Image.url);

  return {
    props: {
      character: character[0]
    }
  }
}

export async function getStaticPaths() {
  const characters = await fetchAPI("/characters");

  const paths = characters.map((item) => ({
    params: { name: item.Slug,  }
  }));

  return { paths, fallback: false }
}