import { useState } from "react";



const useCounter = () => {
    
    const [ cart, setCart ] = useState([]);

    const [counter, setCounter] = useState(0)

    function setPromotoCart ( promocion ){

       setCounter( counter + 1 )
       setCart( ( prev ) => {

        const producto = prev.find( prod => prod.id === promocion.id );

        if( producto ){
            return prev.map(  ( i ) =>  i.id === promocion.id ? { ...i , cantidad: i.cantidad + 1} : i )
        }
        return [ ...prev, { ...promocion , cantidad: 1 } ]
       } )

    }

    function decrementar ( id ){
        
        if( counter < 1 ) return
        setCounter( counter - 1 )

        setCart( ( prev ) => {
            const producto = prev.find( prod => prod.id === id );
            if( producto ){
                if ( producto.cantidad === 1) {
                    const newArrayProductos = prev.filter( ( i ) => i.id !== id )
                    return newArrayProductos;
                }else{
                    return prev.map(  ( i ) =>  
                    i.id === id ? { ...i , cantidad: i.cantidad -  1} : i )
                };
            }else{
                return prev;
            }
        })
    
    }

    return {
        incrementar: setPromotoCart ,
        decrementar,
        cart,
        counter
    };
}
 
export default useCounter;