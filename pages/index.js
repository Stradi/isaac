import { fetchAPI } from "../lib/api";
import { fetchImageAsBase64 } from "../lib/image";

import CharacterList from "../components/CharacterList"

export default function Home({ characters }) {
  return (
    <div>
      <CharacterList title="Characters" characters={ characters }/>
    </div>
  )
}

export async function getStaticProps(context) {
  const characters = await fetchAPI("/characters");
  
  const final = await Promise.all(characters.map(async (item) => {
    let copy = Object.assign({}, item);
    copy.Image.base64 = await fetchImageAsBase64(item.Image.url);

    return copy;
  }));

  return {
    props: {
      characters: final
    }
  }
}