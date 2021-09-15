import { generateHeartImages } from "../../lib/image";

export default function CharacterStats({ character, imageScale }) {
  const heartScale = 4/6;
  const heartImages = generateHeartImages(character.Heart.RedHeart, character.Heart.SoulHeart, character.Heart.BlackHeart, character.Heart.CoinHeart, character.Heart.BoneHeart, heartScale);
  
  return (
    <div>
      <img src={ `data:${ character.Image.mime };base64,${ character.Image.base64 }` } alt={ character.Image.alternativeText } width={ character.Image.width * imageScale } height={ character.Image.height * imageScale } className="mx-auto pb-4" />
      <table className="p-16 mx-auto w-full">
        <thead className="bg-gray-900 text-gray-200">
            <tr><th colSpan="2">Starting Items</th></tr>
        </thead>
        <tbody className="">
          <tr className="bg-gray-100">
            <td className="px-4 py-2 font-medium">Heart</td>
            <td className="px-4 py-2">{ heartImages }</td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-medium">Bomb</td>
            <td className="px-4 py-2">1</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="px-4 py-2 font-medium">Key</td>
            <td className="px-4 py-2">0</td>
          </tr>
        </tbody>
        <thead className="bg-gray-900 text-gray-200 text-left">
          <tr>
            <th className="px-4">Stat</th>
            <th className="px-4">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-100">
            <td className="px-4 py-2 font-medium">Damage</td>
            <td className="px-4 py-2">{ character.Damage }</td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-medium">Tears</td>
            <td className="px-4 py-2">{ character.Tears }</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="px-4 py-2 font-medium">Shot Speed</td>
            <td className="px-4 py-2">{ character.ShotSpeed }</td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-medium">Range</td>
            <td className="px-4 py-2">{ character.Range }</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="px-4 py-2 font-medium">Speed</td>
            <td className="px-4 py-2">{ character.Speed }</td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-medium">Luck</td>
            <td className="px-4 py-2">{ character.Luck }</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}