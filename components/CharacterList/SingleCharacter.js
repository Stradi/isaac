import Link from "next/link";
import Image from "next/image";

import { getImageURL } from "../../lib/image";

export default function SingleCharacter({ character, scaleFactor }) {
  const itemClasses = "table w-40 h-28 p-2 mb-2 bg-gray-200 text-gray-900 text-center font-medium cursor-pointer border border-gray-300 transition hover:shadow-md"

  return (
    <Link passHref href={ `characters/${ character.Slug }` }>
      <a className={ itemClasses }>
        <Image src={ getImageURL(character.Image.url) } alt={ character.Image.alternativeText } width={ character.Image.width * scaleFactor } height={ character.Image.height * scaleFactor } />
        <p className="table-footer-group align-bottom">{ character.Name }</p>
      </a>
    </Link>
  );
}