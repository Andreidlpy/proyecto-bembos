import React from 'react'
import './home.css';

const promociones_online  = [
  {
    nombre: "Dupla Perfecta",
    precio_actual: 30.9,
    precio_antiguo: 40.6,
    id: 44,
    img: "https://www.bembos.com.pe/_ipx/q_85,w_275/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x1370-combo-royal-cheese-bb.webp"
  },
  {
    nombre: "Combo A lo pobre",
    precio_actual: 14.9,
    precio_antiguo: 26.8,
    id: 45,
    img: "https://www.bembos.com.pe/_ipx/q_85,w_275/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x1370-combo-a-lo-pobre-oct.webp"
  },
  {
    nombre: "Dúo Extrema",
    precio_actual: 30.9,
    precio_antiguo: 51.6,
    id: 46,
    img: "https://www.bembos.com.pe/_ipx/q_85,w_275/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x1370-duo-extrema.webp"
  },
  {
    nombre: "Extremadamente Cheesy",
    precio_actual: 57.9,
    precio_antiguo: 91.2,
    id: 47,
    img: "https://www.bembos.com.pe/_ipx/q_85,w_275/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x1370-extremadamente-cheesy-bb.webp"
  },
  {
    nombre: "Familiar Parrillero",
    precio_actual: 54.9,
    precio_antiguo: 85.2,
    id: 48,
    img: "https://www.bembos.com.pe/_ipx/q_85,w_275/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x1370-familiar-parrillero-bb.webp"
  },
  {
    nombre: "Parrillera con antojito",
    precio_actual: 18.9,
    precio_antiguo: 28.7,
    id: 49,
    img: "https://www.bembos.com.pe/_ipx/q_85,w_275/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x1370-parrillera-mini-princesa.webp"
  },
  {
    nombre: "Combo Interbank",
    precio_actual: 19.9,
    precio_antiguo: 30.3,
    id: 50,
    img: "https://www.bembos.com.pe/_ipx/q_85,w_275/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x1370-combo-interbank-oct.webp"
  },
  {
    nombre: "Familiar 1",
    precio_actual: 49.9,
    precio_antiguo: 83.2,
    id: 51,
    img: "https://www.bembos.com.pe/_ipx/q_85,w_275/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/f/a/familiar-1-bembos.webp"
  },
  {
    nombre: " Promo Churrita",
    precio_actual: 16.9,
    precio_antiguo: 27.7,
    id: 52,
    img: "https://www.bembos.com.pe/_ipx/q_85,w_275/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/c/h/churrita-base-individual.webp"
  },
  {
    nombre: "Combo Cheese",
    precio_actual: 12.9,
    precio_antiguo: 19.8,
    id: 53,
    img: "https://www.bembos.com.pe/_ipx/q_85,w_275/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/c/o/combo-cheese-nuevo.webp"
  }
]
export const Home = () => {
  return (
    <>
      <section className='propmociones container'>
        <h2 className='propmociones_heading'>Promociones de hamburguesas online</h2>
        <div className="promociones_grid">
          {
            promociones_online.map(( { id, nombre, img , precio_actual, precio_antiguo} ) => (
                <article className='promocion' key={ id }>
                    <div className='promocion_imagen'>
                      <img src={ img } alt="" />
                    </div>
                    <h3 className='promocion_nombre'>{ nombre }</h3>
                    <div className="precio">
                      <span className='precio_actual'>S/.{ precio_actual }</span>
                      <span className='precio_antiguo'>S/.{ precio_antiguo }</span>
                    </div>
                    <div className='boton'>
                      <button className='btn boton_ver'>Ver más</button>
                    </div>
                </article>
              ))
            }
        </div>
      </section>
    </>
  )
}
