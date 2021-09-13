export default function CharacterStats({ character, imageScale }) {
  return (
    <div>
      <img src={ `data:${ character.Image.mime };base64,${ character.Image.base64 }` } alt={ character.Image.alternativeText } width={ character.Image.width * imageScale } height={ character.Image.height * imageScale } className="mx-auto pb-4" />
      <table className="p-16 mx-auto w-full">
        <thead>
          <tr className="bg-gray-200">
            <th>Stat</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr >
            <td className="px-4 py-2 font-medium">Damage</td>
            <td className="px-4 py-2">{ character.Damage }</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="px-4 py-2 font-medium">Tears</td>
            <td className="px-4 py-2">{ character.Tears }</td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-medium">Shot Speed</td>
            <td className="px-4 py-2">{ character.ShotSpeed }</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="px-4 py-2 font-medium">Range</td>
            <td className="px-4 py-2">{ character.Range }</td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-medium">Speed</td>
            <td className="px-4 py-2">{ character.Speed }</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="px-4 py-2 font-medium">Luck</td>
            <td className="px-4 py-2">{ character.Luck }</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}