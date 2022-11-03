import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getGifs(category)
      .then(setImages);
      setIsLoading(false);
  }, [])

  return {
    images, //images: images, cuando el valor que se le da tiene el mismo nombre que la variable, se puede simplifcar así.
    isLoading
  }
}
