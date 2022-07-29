
import { CardHero } from "../components/CardHero";
import { Title } from "../components/Title";
import { useFetch } from "../hooks/useFetch";


export const Home = () => {
  
  const url = 'https://ea1w717ym2.execute-api.us-east-1.amazonaws.com/api/heroes?size=20'

  const { data, loading, error} = useFetch(url);

  let listHeroes = [];
  listHeroes = data.items;


  return (
    <>
    <Title />
    {
        (loading)? 
        <h1>Cargando.....</h1>
         : 
         listHeroes.map(item => (
          
            <CardHero key={item.id} {...item} />
         ))
    }     
        
    </>
  )
}
