import CharacterStats from "../../components/CharacterStats/CharacterStats";
import { fetchAPI } from "../../lib/api";
import { fetchImageAsBase64 } from "../../lib/image";

import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote";

export default function Character({ character, content }) {
  return (
    <div>
      <h1 className="text-center text-4xl font-medium">{ character.Name }</h1>
      <div className="md:flex md:flex-row-reverse md:justify-between">
        <aside className="w-full md:w-1/4 md:mx-auto  border md:sticky h-full top-4 m-2 mb-4 border-gray-300">
          <CharacterStats character={ character } imageScale="4" />
        </aside>
        <div className="prose prose-md md:prose-xl max-w-full md:w-3/4">
          <MDXRemote { ...content } />
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const character = await fetchAPI(`/characters?Slug=${ params.name }`);
  character[0].Image.base64 = await fetchImageAsBase64(character[0].Image.url);

  const mdSource = await serialize(character[0].Content)
  
  return {
    props: {
      character: character[0],
      content: mdSource
    }
  }
}

export async function getStaticPaths() {
  const characters = await fetchAPI("/characters");

  const paths = characters.map((item) => ({
    params: { name: item.Slug }
  }));

  return { paths, fallback: false }
}