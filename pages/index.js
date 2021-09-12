import Sidebar from "../components/Sidebar"
import MainSearch from "../components/MainSearch"
import CharacterList from "../components/CharacterList"

import sampleImage from "../public/placeholder.png";
import { fetchAPI } from "../lib/api";

export default function Home({ characters }) {
  return (
    <div>
      <Sidebar>
        <h1 className="text-2xl font-normal text-center">Logo goes here</h1>
      </Sidebar>
      <div className="ml-64">
        <MainSearch placeholder="Search anything"/>
        <div className="p-8">
          <CharacterList title="Characters" characters={ characters } />
        </div>
      </div>
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