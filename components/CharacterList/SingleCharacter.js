import Link from "next/link";

export default function SingleCharacter({ character, scaleFactor }) {
  const itemClasses = "table w-40 h-28 p-2 mb-2 bg-gray-200 text-gray-900 text-center font-medium cursor-pointer border border-gray-300 transition hover:shadow-md"

  return (
    <Link passHref href={ `characters/${ character.Slug }` }>
      <a className={ itemClasses }>
        { /* TODO: Find a workaround for img tags. */ }
        <img src={ `data:${ character.Image.mime };base64,${ character.Image.base64 }` } alt={ character.Image.alternativeText } width={ character.Image.width * scaleFactor } height={ character.Image.height * scaleFactor } className="mx-auto" />
        <p className="table-footer-group align-bottom">{ character.Name }</p>
      </a>
    </Link>
  );
}