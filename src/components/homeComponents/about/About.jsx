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
          <h2>Sobre Nosotros</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
            malesuada nisl, ut dictum odio. Etiam venenatis lectus a consequat
            tincidunt. Phasellus varius quis eros id tincidunt.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

