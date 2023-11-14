import { useState } from "react"

export const useMenuNavbar = () => {

   const [menu , setMenu] = useState( false )

   const activeMenu  = ( ) => {
       setMenu( !menu ) 
       console.log( menu );
   }
  return {
    activeMenu,
    menu
  }
}
