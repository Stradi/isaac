import { fetchAPI } from "../lib/api"

export default function PillPage({ pills }) {
  const pillsDOM = pills.map((pill, idx) => {
    const stripe = idx % 2 == 0 ? "bg-gray-100" : "";
    const effectText = pill.Effect.split("\n").map((line, idx) => { return line ? <p key={ idx }>{ line }</p> : <br/> })
    const megaEffectText = pill.MegaEffect.split("\n").map((line, idx) => { return line ? <p key={ idx }>{ line }</p> : <br/> })

    //TODO: Add anchor link to pill name using pill's slug.
    //Final url should be /pills#pill-name

    return (
      <tr key={ pill.id } className={ stripe }>
        <td className="px-4 py-2 font-medium">{ pill.Name }</td>
        <td className="px-4 py-2">{ effectText }</td>
        <td className="px-4 py-2">{ megaEffectText }</td>
      </tr>
    );
  })

  return (
    <div className="w-3/4 mx-auto">
      <h2 className="text-3xl text-center text-gray-800 font-bold mb-4">Pills</h2>
      <table className="border-2 border-gray-200">
        <thead>
          <tr className="font-medium text-center bg-gray-900 text-gray-200">
            <td>Name</td>
            <td>Effect</td>
            <td>Horse Pill Effect</td>
          </tr>
        </thead>
        <tbody>
          { pillsDOM }
        </tbody>
      </table>
    </div>
  )
}

export async function getStaticProps(context) {
  const pills = await fetchAPI("/pills");

  return {
    props: {
      pills
    }
  }
}