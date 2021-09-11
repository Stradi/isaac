import Sidebar from "../components/Sidebar"
import MainSearch from "../components/MainSearch"
import Gallery from "../components/Gallery"

import sampleImage from "../public/placeholder.png";

export default function Home() {
  const items = [
    { name: "Isaac", url: "#", image: sampleImage },
    { name: "Magdalene", url: "#", image: sampleImage },
    { name: "Cain", url: "#", image: sampleImage },
    { name: "Judas", url: "#", image: sampleImage },
    { name: "???", url: "#", image: sampleImage },
    { name: "Eve", url: "#", image: sampleImage },
    { name: "Samson", url: "#", image: sampleImage },
    { name: "Azazel", url: "#", image: sampleImage },
    { name: "Lazarus", url: "#", image: sampleImage },
    { name: "Eden", url: "#", image: sampleImage },
    { name: "The Lost", url: "#", image: sampleImage },
    { name: "Lilith", url: "#", image: sampleImage },
    { name: "Keeper", url: "#", image: sampleImage },
    { name: "Apollyon", url: "#", image: sampleImage },
    { name: "The Forgotten", url: "#", image: sampleImage },
    { name: "Bethany", url: "#", image: sampleImage },
    { name: "Jacob and Esau", url: "#", image: sampleImage },
  ]

  return (
    <div>
      <Sidebar>
        <h1 className="text-2xl font-normal text-center">Logo goes here</h1>
      </Sidebar>
      <div className="ml-64">
        <MainSearch placeholder="Search anything"/>
        <div className="p-8">
          <Gallery title="Characters" items={ items } />
        </div>
      </div>
    </div>
  )
}