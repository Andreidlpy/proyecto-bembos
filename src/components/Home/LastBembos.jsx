
import { Card } from '../Card/Card'

export const LastBembos = () => {
  return (
    <section className="last-bembos container">
        <h2 className="last-bembos__heading">¡Lo último de Bembos!</h2>
        <Card
          img={"./src/assets/500x669-inka-chips-1.webp"}
          buttonText="Ver más"
          precio_actual="3.00"
        />
    </section>
  )
}
