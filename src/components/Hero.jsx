

export const Hero = ({ appearance, biography, connections, images, powerstats, work, name }) => {

  return(
            <div className="container_hero">
                <div className="container_images">
                  <img className="image_hero" src={images.md}/>
                </div>              
                <div className="container_biografia">
                  <h1>Biografia</h1>
                  <p>Nombre: {name}</p>
                  <p>Primera Aparicion: {biography.firstAppearance}</p>
                  <hr />
                  <h3>Apariencia</h3>
                  <p>Color ojos: {appearance.eyeColor}</p>
                  <p>Genero: {appearance.gender}</p>
                  <p>Altura: {appearance.height[1]}</p>
                  <p>Raza: {appearance.race}</p>            
                </div>   
          </div>     
  )
}
