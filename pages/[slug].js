import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { fetchAPI } from "../lib/api"

import CharacterList from "../components/CharacterList";
import { fetchImageAsBase64 } from "../lib/image";

export default function Page({ page, content, componentProps }) {
  const components = { CharacterList }

  return (
    <div>
      <h1 className="text-5xl font-bold">{ page.Title }</h1>
      <div className="prose md:prose-xl max-w-full">
        <MDXRemote { ...content } components={ components } scope={ componentProps } />
      </div>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const charactersResponse = await fetchAPI("/characters");
  const charactersArray = charactersResponse.map(async item => {
    let copy = Object.assign({}, item);
    copy.Image.base64 = await fetchImageAsBase64(item.Image.url);

    return copy;
  });
  const characters = await Promise.all(charactersArray);

  const page = await fetchAPI(`/pages?Slug=${ params.slug }`);
  const mdSource = await serialize(page[0].Content);

  return {
    props: {
      page: page[0],
      content: mdSource,
      componentProps: {
        characters
      }
    }
  }
}

export async function getStaticPaths() {
  const pages = await fetchAPI("/pages");

  const paths = pages.map((item) => ({
    params: { slug: item.Slug }
  }));

  return { paths, fallback: false }
}