import React from 'react'
import './Footer.css';
import { useLocation } from 'react-router-dom';

export const Footer = () => {
     const { pathname } = useLocation();
     console.log(pathname.startsWith('/promociones/'))
    return (
        <>
                {
                    !pathname.startsWith('/promociones/') &&
                    (
                    <footer>
            <div className='footer_social_icons container'>
                <a target='_blank' href="https://www.facebook.com/bembos/"><img src="/images/face.jpeg" alt="" /></a>
                <a target='_blank' href="https://www.youtube.com/user/BembosCanal"><img src="/images/yutube.jpeg" alt="" /></a>
                <a target='_blank' href="https://twitter.com/BembosOficial"><img src="/images/icon-twiter.jpeg" alt="" /></a>
                <a target='_blank' href="https://www.instagram.com/bembosoficial/?hl=es-la"><img src="/images/icon-instagram.jpeg" alt="" /></a>
            </div>

            <div className='footer_body_container container'>
                <div className="footer_body">
                    <div className='footer_body_maps'>
                        <p>MAPA DEL SITIO</p>
                        <div className='footer_body_maps_list'>
                            <a href="">Locales</a>
                            <a href="">Nosotros</a>
                            <a href="">Atención al Cliente</a>
                            <a href="">Preguntas Frecuentes</a>
                            <a href="">Mapa de sitio</a>
                        </div>
                    </div>

                    <div className="footer_body_terms">
                        <p>TÉRMINOS Y CONDICIONES</p>
                        <div className="footer_body_terms_list">
                            <a href="">Políticas de Datos Personales</a>
                            <a href="">Términos y condiciones de Promociones</a>
                            <a href="">Derechos ARCO</a>
                        </div>
                    </div>
                </div>

                <div className='footer_pay_methods'>
                    <p className='footer_pay_methods_text'>FORMAS DE PAGO</p>
                    <div className='footer_pay_methods_cards'>
                        <img src="/images/visa.jpg" alt="" />
                        <img src="/images/mastercard.png" alt="" />
                        <img src="/images/american-express.jpg" alt="" />
                    </div>
                    <div className='footer_img_safety'>
                        <img src="/images/icon-safety.jpeg" alt="" />
                    </div>
                    <div className='footer_pay_methods_button_container'>
                        <button className='footer_pay_methods_button'>
                            <img src="/images/icon-document.png" alt="" />
                            <p>COMPROBANTES</p>
                        </button>
                    </div>
                </div>

                <div className='footer_contacto_libro_container'>
                    
                    <div className="footer_contacto_container">
                        <p>¿Quieres recibir promociones y noticias?</p>

                        <div className='footer_contacto'>
                            <input type="text" className='footer_contacto_input_box' placeholder='Tu correo' />
                            <button className='footer_contacto_button' >ENVIAR</button>
                        </div>

                        <div className='footer_contacto_terms'>
                            <input type="checkbox" />
                            <label htmlFor="">He leído y revisado los términos y condiciones</label>
                        </div>
                    </div>

                    <div className='footer_img_libro_reclamaciones'>
                        <img src="/images/lirbro.jpeg" alt="" />
                    </div>
                </div>

            </div>


            <div className="footer_derechos_reservados">
                <p>© 2019 Todos los derechos reservados</p>
            </div>
                    </footer>
                    )
                }       
        </>
        
    )
}
