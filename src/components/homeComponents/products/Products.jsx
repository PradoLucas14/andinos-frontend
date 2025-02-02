import React from 'react';
import './Products.css';
import img1 from '../../../assets/img/imgProduct1.jpg';
import img2 from '../../../assets/img/imgProduct2.jpg';
import img3 from '../../../assets/img/imgProduct3.jpg';

function Products() {
  const products = [
    {
      src: img1,
      title: "Picadas Artesanales",
      description: "Una exquisita selección de quesos, fiambres y panificados, ideal para compartir."
    },
    {
      src: img2,
      title: "Cócteles Refrescantes",
      description: "Una mezcla perfecta de sabores frutales y espirituosos para disfrutar en cualquier ocasión."
    },
    {
      src: img3,
      title: "Postres de Tentación",
      description: "Un dulce final con texturas y sabores irresistibles que conquistan cada bocado."
    }
  ];

  return (
    <div className="products">
      <h2 className="productsTittle">
        - Nuestras Especialidades -
      </h2>
      <div className='products-container'>
        {products.map((product, index) => (
          <div className='product-card' key={index}>
            <img src={product.src} alt={product.title} className='product-image' />
            <div className='overlay'>
              <h3 className='overlay-title'>{product.title}</h3>
              <p className='overlay-description'>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

