import React from "react";

export const Contact = () => {
  return (
    <section className="contacts">
      <div className="contact container">
        <h2 className="contact__heading">¿Eres fan de Bembos?</h2>
        <p className="contact__text">
          Dejanos tus datos y obtén acceso a ofertas y beneficios exclusivos
        </p>
        <div className="contact__form">
          <form action="">
            <div className="contact__row">
              <div className="contact__form-control">
                <input required type="text" placeholder="Nombre" />
                <input required type="text" placeholder="Apellido" />
              </div>
              <div className="contact__form-control">
                <input required type="tel" placeholder="Celular" />
                <input required type="email" placeholder="Correo Electronico" />
              </div>
            </div>
            <div className="contact__conditions">
              <input required type="checkbox" name="condition" id="condition" />
              <label htmlFor="condition">
                Acepto los <a href="">terminos y condiciones</a> y la politica
                de <a href="">uso de datos personales</a>
              </label>
            </div>
            <div className="contact__actions">
              <button
                type="submit"
                className="btn contact__button contact__button--send"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
