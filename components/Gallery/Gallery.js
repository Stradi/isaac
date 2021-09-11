import Link from "next/link"
import Image from "next/image"

export default function Gallery({ title, items }) {
  const galleryItems = items.map((item) => 
    <Link key={ item.name } passHref href={ item.url }>
      <div className="inline-block w-40 p-4 mb-2 bg-gray-200 text-gray-900 text-center font-medium cursor-pointer">
        <Image src={ item.image } alt={ item.name } width="125" height="125" />
        <br />
        <a>{ item.name }</a>
      </div>
    </Link>
  );
  
  return (
    <div>
      <h2 className="text-3xl text-center text-gray-800 font-bold">{ title }</h2>
      <div className="flex flex-wrap justify-evenly mt-4">
        { galleryItems }
      </div>
    </div>
  )
}