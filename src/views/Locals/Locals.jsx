import React, { useEffect } from "react";
import "./locals.css";
import { Footer } from "../../components/Footer/Footer";
import { Local } from "../../components/Local/Local";

import { db } from "../../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useState } from "react";
import { object } from "prop-types";

export const Locals = () => {
  const [locals, setlocals] = useState([]);

  const localsCollectionRef = collection(db, "locals");

  const getLocals = async () => {
    const data = await getDocs(localsCollectionRef);

    const res = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    console.log(res);
    setlocals(res);
  };

  useEffect(() => {
    getLocals();
  }, []);

  return (
    <>
      <div className="locals-background page__wrapper">
        <div className="locals__content">
          <div className="locals container">
            <h2 className="locals__title">
              Locales Bembos: Hamburguesas a la Parilla Cerca de ti
            </h2>
            <div className="locals__container">

            <div className="columns">
                {locals
                  .filter((local) => local.departamento == "Lima")
                  .map((local) => (
                    <div className="locals__container__city">
                      <p>HAMBURGUESAS EN {local.departamento}</p>
                      {local.distritos.map((distrito) => (
                        <div className="locals__container__city__district">
                          {distrito.nombre && <p> {distrito.nombre} </p>}
                          {distrito.locales.map((local) => (
                            <a href=""> {local} </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}
              </div>

              <div className="columns">
                {locals
                  .filter((local) => local.departamento != "Lima")
                  .map((local) => (
                    <div className="locals__container__city">
                      <p>HAMBURGUESAS EN {local.departamento}</p>
                      {local.distritos.map((distrito) => (
                        <div className="locals__container__city__district">
                          {distrito.nombre && <p> {distrito.nombre} </p>}
                          {distrito.locales.map((local) => (
                            <a href=""> {local} </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
