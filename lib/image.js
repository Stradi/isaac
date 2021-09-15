import Image from "next/image";

export function getImageURL(path) {
  return `${process.env.STRAPI_API_URL || "http://localhost:1337"}${path}`;
}

export async function fetchImageAsBase64(uri) {
  const response = await fetch(getImageURL(uri));
  const arrayBuffer = await response.arrayBuffer();

  return Buffer.from(arrayBuffer).toString("base64");
}

export function generateHeartImages(red, soul, black, coin, bone, heartScale = 4/6) {
  const heartImages = []

  for(let i = 0; i < red; i++) {
    heartImages.push(<Image key={ `Red Heart ${i}` } src="/game-icons/red_heart_full.png" alt="Red Heart" width={ 28 * heartScale } height={ 26 * heartScale } />);
  }
  for(let i = 0; i < soul; i++) {
    heartImages.push(<Image key={ `Soul Heart ${i}` } src="/game-icons/soul_heart_full.png" alt="Soul Heart" width={ 28 * heartScale } height={ 26 * heartScale } />);
  }
  for(let i = 0; i < black; i++) {
    heartImages.push(<Image key={ `Black Heart ${i}` } src="/game-icons/black_heart_full.png" alt="Black Heart" width={ 28 * heartScale } height={ 26 * heartScale } />);
  }
  for(let i = 0; i < coin; i++) {
    heartImages.push(<Image key={ `Coin Heart ${i}` } src="/game-icons/coin_heart_full.png" alt="Coin Heart" width={ 28 * heartScale } height={ 26 * heartScale } />);
  }
  for(let i = 0; i < bone; i++) {
    heartImages.push(<Image key={ `Bone Heart ${i}` } src="/game-icons/bone_heart_full.png" alt="Bone Heart" width={ 28 * heartScale } height={ 26 * heartScale } />);
  }
  
  if(red == -1 || soul == -1 || black == -1) {
    heartImages.push(<Image src="/game-icons/hearts_animated.gif" alt="Random" width={ 28 * 3 * heartScale } height={ 26 * heartScale } />);
  }

  if(heartImages.length == 0) {
    heartImages.push(<p>No Health</p>)
  }

  return heartImages;
}