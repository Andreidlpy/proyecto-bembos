import { Accordion } from "../../components/Accordion/Accordion"
import './nosotros.css'

export const Nosotros = () => {
  return (
    <main className="about">
      <div className="about-container container">
        <h2 className="about__heading">NOSOTROS</h2>
        <Accordion />
      </div>
    </main>
  )
}
