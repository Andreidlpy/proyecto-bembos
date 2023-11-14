import { Accordion } from "../../components/Accordion/Accordion"
import { Footer } from "../../components/Footer/Footer"
import './nosotros.css'

export const Nosotros = () => {
  return (
    <>
    <main className="about page__wrapper">
      <div className="about__content">
        <div className="about__container container">
          <h2 className="about__heading">NOSOTROS</h2>
          <Accordion />
        </div>
      </div>
    </main>
    <Footer />
    </>
  )
}
