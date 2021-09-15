import { createRef, useState } from "react";

import SingleCharacter from "./SingleCharacter";

export default function CharacterList({ characters, scaleFactor }) {
  const [isTainted, setIsTainted] = useState(false);
  const switchButton = createRef();

  const switchTainted = () => {
    if(isTainted) {
      switchButton.current.innerText = "Switch to Normal Characters";
    } else {
      switchButton.current.innerText = "Switch to Tainted Characters";
    }
    setIsTainted(!isTainted);
  }
  
  const subCharacters = characters.filter(c => c.SubCharacters.length > 0).map((parent) => parent.SubCharacters).flat();

  const taintedCharacters = characters.filter(c => c.IsTainted && !subCharacters.map((sub) => sub.id).includes(c.id));
  const normalCharacters = characters.filter(c => !c.IsTainted && !subCharacters.map((sub) => sub.id).includes(c.id));

  const normalCharactersDOM = normalCharacters.map((item) =>
    <SingleCharacter key={ item.Name } character={ item } scaleFactor={ scaleFactor } />
    );
    
  const taintedCharactersDOM = taintedCharacters.map((item) => 
    <SingleCharacter key={ item.Name } character={ item } scaleFactor={ scaleFactor } />
  );
    
  return (
    <div className="character-list">
      <div className="flex justify-center my-4">
        <button onClick={ switchTainted } ref={ switchButton } className="bg-gray-200 py-2 px-4 border border-gray-300 transition hover:shadow-md">Switch to Tainted Characters</button>
      </div>
      <div className="flex flex-wrap justify-center">
        { isTainted ? taintedCharactersDOM : normalCharactersDOM }
      </div>
    </div>
  )
}