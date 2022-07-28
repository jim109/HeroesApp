
import { useParams } from "react-router-dom";
import { Hero } from "../components/hero";
import { useFetch } from "../hooks/useFetch";

export const Heroe = () => {
    const params = useParams();

    const { id } = params

    const url = `https://ea1w717ym2.execute-api.us-east-1.amazonaws.com/api/hero?id=${id}`

    const { data } = useFetch(url);

    let listHeroes = [];
    

    listHeroes = data; 

    const { appearance, biography, connections, images, powerstats, work, name } = listHeroes


  return (
    <>
     
{     
      (listHeroes === undefined)? 
        <h1>Cargando ...</h1>
        :     
        <Hero 
          key={id}
          appearance = {appearance}
          biography = {biography}
          connections = {connections}
          images = {images}
          powerstats = {powerstats}
          work = {work}
          name = {name}
        />   
           
        
}

    </>
  )
}
