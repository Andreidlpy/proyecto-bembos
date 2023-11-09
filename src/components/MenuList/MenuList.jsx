import { MenuItem } from "./MenuItem";

import './menu-list.css'

export const MenuList = () => {
  const menus =  [
    {
      id: 1,
      nombre: "Promociones Exclusivas Web",
      img: "https://www.bembos.com.pe/_ipx/q_75,s_540x382/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/509x360-duo-qt-categoria-nuevo-mayo.jpg",
    },
    {
      id: 2,
      nombre: "Hamburguesas",
      img: "https://www.bembos.com.pe/_ipx/q_75,s_540x382/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/combo-churrita-509x360.jpg",
    },
    {
      id: 3,
      nombre: "Pollo",
      img: "https://www.bembos.com.pe/_ipx/q_75,s_540x382/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/509x360-hamburguesas.jpg",
    },
    {
      id: 4,     
      nombre: "Loncheritas",
      img: "https://www.bembos.com.pe/_ipx/q_75,s_540x382/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/509x360-pollo.jpg",
    },
    {
      id: 5,          
      nombre: "Complementos",
      img: "https://www.bembos.com.pe/_ipx/q_75,s_540x382/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/loncherita-509x360.jpg",
    },
    {
      id: 6,
      nombre: "Bebidas",
      img: "https://www.bembos.com.pe/_ipx/q_75,s_540x382/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/complementos_desktop_1.jpeg",
    },
    {
      id: 7,
      nombre: "Helados",
      img: "https://www.bembos.com.pe/_ipx/q_75,s_540x382/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/510x360-gaseosas_1.jpg",
    },
    {
      id: 8,
      nombre: "Inka Chips",
      img: "https://www.bembos.com.pe/_ipx/q_75,s_540x382/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/509x360-princesa-categoria-nuevo-mayo.jpg",
    },
  ];
  return (
    <section className="menu-list">
      { menus.map(( menu ) => (
        <MenuItem key={ menu.id } { ...menu } />
      ))}
    </section>
  );
};
