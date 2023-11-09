import {   useParams} from "react-router-dom"

export const Producto = () => {
    const { name } = useParams();
  return (
    <div style={{paddingTop: "220px"}}>
        <h1>{ name }</h1>
    </div>
  )
}
