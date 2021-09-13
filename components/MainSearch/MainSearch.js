import { useEffect, useState } from "react";

export default function MainSearch({ placeholder }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  
  useEffect(() => {
    const delayEffect = setTimeout(() => {
      if(searchTerm) {
        // Perform search here.
        console.log(`Search: ${searchTerm}`)
        setShowResults(true);
      } else {
        setShowResults(false);
      }
    }, 300)

    return () => clearTimeout(delayEffect)
  }, [searchTerm]);

  let handleChange = (e) => {
    setSearchTerm(e.target.value);

    if(!e.target.value) {
      setShowResults(false);
    }
  }

  return (
    <div>
      <input type="text" value={ searchTerm } onChange={ handleChange } placeholder={ placeholder } maxLength="50" className="placeholder-gray-500 w-full h-12 md:h-24 bg-gray-400 focus:outline-none px-8 text-gray-700 text-xl md:text-5xl shadow-xl"/>
      { showResults && 
        <div className="w-full truncate md:h-16 bg-gray-600 px-8 py-4 text-gray-200 text-md md:text-xl">
          No results found for <span className="font-bold">{ searchTerm }</span>
        </div>
      }
    </div>
  );
}