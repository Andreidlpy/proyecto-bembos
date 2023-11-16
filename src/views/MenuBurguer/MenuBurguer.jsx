import React from "react";
import { NavLink } from "../../components/NavLink";

import "./menu-burguer.css";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import { usePromotions } from "../../hooks/usePromotions";
import { Footer } from "../../components/Footer/Footer";
import { db } from "../../config/firebase";
import { collection, getDocs } from "@firebase/firestore";

import { fetchData } from "../../api/getData";
import { useMenu } from "../../hooks/useMenu";
import { CardSkeleton } from "../../components/CardSkeleton/CardSkeleton";
const links = [
  { name: "Combos" },
  { name: "Hamburguesas" },
  { name: "Pollo" },
  { name: "Loncherita" },
  { name: "Complementos" },
  { name: "Bebidas" },
  { name: "Helados" },
  { name: "InkaChips" },
];

export const MenuBurguer = () => {
  const [burgerNav, setBurgerNav] = useState(0);

  const { name } = useParams();
  const { menuData, loading } = useMenu(name);

  useEffect(() => {
    const setFixed = () => {
      if (window.scrollY >= 92) {
        setBurgerNav(true);
      } else {
        setBurgerNav(false);
      }
    };
    window.addEventListener("scroll", setFixed);

    return () => {
      window.removeEventListener("scroll", setFixed);
    };
  }, []);

  return (
    <>
      <main className="menu-burguer page__wrapper">
        <section className="menu-burguer__content">
          <ul
            className={`menu-burguer__list ${
              burgerNav ? "menu-burger__active" : ""
            } `}
          >
            {links.map((link, i) => (
              <li key={i}>
                <NavLink
                  to={`/menu/${link.name.toLocaleLowerCase()}`}
                  nameActive={"menu__link-active"}
                >
                  {" "}
                  {link.name}{" "}
                </NavLink>
              </li>
            ))}
          </ul>
        </section>
        <section className="list-menu container">
          <h1 className="list-menu__heading">{name}</h1>
          <div className="list-menu__grid">
            {loading ? (
              <CardSkeleton cardsSkeleton={4} />
            ) : menuData.length < 1 ? (
              <p className="list-menu__title-empty">No hay productos existentes</p>
            ) : (
              menuData.map(({ id, precio, ...prd }) => (
                <Card key={id} precio_actual={precio} {...prd} />
              ))
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
