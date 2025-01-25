import React from 'react';
import './About.css';
import exampleImage from '../../../assets/img/imgAbout.jpg';

function About() {
  return (
    <div className="About">
      <div className="container">
        <div className="column image-column">
          <img src={exampleImage} alt="Descripción de la imagen" />
        </div>
        <div className="column text-column">
            <h2>- Sobre Nosotros -</h2>
            <p>
                Andinos es un restaurante que celebra la tradición del norte 
                argentino mientras ofrece los clásicos favoritos que todos disfrutan. 
                Nuestra propuesta combina lo mejor de ambas experiencias: 
                platos tradicionales como empanadas salteñas, locros, 
                humitas y tamales se mezclan con opciones modernas como 
                hamburguesas jugosas, papas fritas crocantes, pizzas irresistibles y más. 
                Cada bocado es una invitación a explorar sabores auténticos, 
                ideales para compartir momentos inolvidables en un ambiente cálido y acogedor.
            </p>
            <button className="btnAbout">
                <span>Ver Más</span>
            </button>
        </div>
      </div>
    </div>
  );
}

export default About;

