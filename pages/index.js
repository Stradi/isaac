import CharacterList from "../components/CharacterList"

import { fetchAPI } from "../lib/api";

export default function Home({ characters }) {
  return (
    <div>
      <CharacterList characters={ characters } />
    </div>
  )
}

export async function getStaticProps(context) {
  const characters = await fetchAPI("/characters");

  return {
    props: {
      characters
    }
  }
}