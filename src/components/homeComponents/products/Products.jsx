import React from 'react';
import './Products.css';
import img1 from '../../../assets/img/imgProduct1.jpg';
import img2 from '../../../assets/img/imgProduct2.jpg';
import img3 from '../../../assets/img/imgProduct3.jpg';

function Products() {
  const images = [img1, img2, img3];

  return (
    <div className='products-container'>
      {images.map((image, index) => (
        <div className='product-card' key={index}>
          <img src={image} alt={`Producto ${index + 1}`} className='product-image' />
          <div className='overlay'>
            <h3 className='overlay-title'>Título del Producto {index + 1}</h3>
            <p className='overlay-description'>Descripción breve del producto.</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
