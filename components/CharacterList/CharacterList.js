
import { createRef, useState } from "react";


import SingleCharacter from "./SingleCharacter";

export default function CharacterList({ title, characters }) {
  const [isTainted, setIsTainted] = useState(false);
  const switchButton = createRef()

  const subCharacters = characters.filter(c => c.SubCharacters.length > 0).map((parent) => parent.SubCharacters).flat();

  const taintedCharacters = characters.filter(c => c.IsTainted && !subCharacters.map((sub) => sub.id).includes(c.id));
  const normalCharacters = characters.filter(c => !c.IsTainted && !subCharacters.map((sub) => sub.id).includes(c.id));

  const normalCharactersDOM = normalCharacters.map((item) =>
    <SingleCharacter key={ item.Name } character={ item } scaleFactor="1.59" />
    );
    
  const taintedCharactersDOM = taintedCharacters.map((item) => 
    <SingleCharacter key={ item.Name } character={ item } scaleFactor="1.59" />
  );

  const switchTainted = (e) => {
    if(isTainted) {
      switchButton.current.innerText = "Switch to Normal Characters";
    } else {
      switchButton.current.innerText = "Switch to Tainted Characters";
    }
    setIsTainted(!isTainted);
  }
    
  return (
    <div>
      <h2 className="text-3xl text-center text-gray-800 font-bold">{ title }</h2>
      <div className="flex justify-center my-4">
        <button onClick={ switchTainted } ref={ switchButton } className="bg-gray-200 py-2 px-4 border border-gray-300 transition hover:shadow-md">Switch to Tainted Characters</button>
      </div>
      <div className="flex flex-wrap justify-evenly">
        { isTainted ? taintedCharactersDOM : normalCharactersDOM }
      </div>
    </div>
  )
}