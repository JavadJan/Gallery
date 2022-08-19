import React, { useState, useEffect } from "react";
import { ImageCard } from "./components/ImageCard";
import { SearchImage } from "./components/SearchImage";
function App() {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState('')

  //request image with api from Pixabay.com
  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=29375855-4b5d581d6131ab33050e6ab12&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        console.log(data.hits)
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err))
  }, [term])
  return (
    <div className="container mx-auto flex flex-col">

      <SearchImage searchText={txt => setTerm(txt)}/>
      {
        !isLoading && images.length===0 && <h1 className="text-6xl text-center mx-auto mt-32">No Result</h1>
      }
      {isLoading ?
        <h1 className="text-6xl text-center mx-auto mt-32">Loading ...</h1> :

        <div className="grid grid-cols-3 gap-4 mx-auto">

          {
            images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))
          }
        </div>}
    </div>
  );
}

export default App;
