
import { Link } from "react-router-dom";



export const CardHero = ({powerstats, work, images, name, id}) => {


  return (
    <div className="card" >
      
      <div className="card_container">
            <img className="img_card" src={ images.sm } />
            <div className="principal_dates">
              <h1>Nombre: { name }</h1>
              <p>Base: { work.base }</p>
              <p>Ocupacion: { work.occupation }</p>
            </div>
            <div className="card_stadistics">
                <h2>Estadisticas</h2>
                <p>Combate: { powerstats.combat }</p>
                <p>Durabilidad: { powerstats.durability }</p>
                <p>Poder: { powerstats.power }</p>
                <p>Fuerza: { powerstats.strength }</p>
                <p>Velocidad: { powerstats.speed }</p>
                <p>Inteligencia: { powerstats.intelligence }</p>
            </div>
            <div className="link">
              <Link className="link_access" to={`/heroe/${id}`} >Mas Info</Link>
            </div>
            
            

      </div>
      
            
         
    </div>
  )
}
