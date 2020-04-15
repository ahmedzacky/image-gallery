import React, { useState, useEffect} from 'react';
import ImageCard from './components/imageCard'
import ImageSearch from './components/imageSearch'


function App() {
  const [images,setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState('')

  useEffect(()=> {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {setImages(data.hits); setIsLoading(false) })
      .catch(err => console.log(err))

  }, [term])


  return (
    <div className="container mx-auto px-5">
      <h1 className="text-3xl text-center mx-auto mt-4">Whatever you wish</h1>
        <ImageSearch setSearch={text => setTerm(text)}/>
        {!isLoading && images.length===0 && <h1 className="text-6xl text-center mx-auto mt-32">Heyyy, No images found :(</h1>}
        
        {isLoading? <h1 className="text-6xl text-center mx-auto mt-32"> Heyyy, We're loading </h1> : 
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {images.map(image => <ImageCard key={image.id} image={image} />)}
          </div>}
    </div>

  );
}

export default App;
