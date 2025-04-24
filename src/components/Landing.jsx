import React from 'react'
import Article from './Article'

function Landing() {
  return (
    <main className="landing">

        <section className="landing_title">
            <h1>¿Y tú?¿Eres más machista o racista?</h1>
            <h2>¿O ninguna de las dos?</h2>
        </section>

        <section className="landing_desc">
            <Article />
            {/* <load src="/partials/article.html" 
            articleclassName="landing_desc_1" 
            imgUrl="" 
            imgAlt="" 
            articleTitle="Completa el test" 
            articleSubTitle="Responde con rapidez y de la manera más 
            honesta posible para resultados precisos."
            /> */}

            {/* <load src="/partials/article.html" 
            className="landing_desc_2" 
            imgUrl="" 
            imgAlt="" 
            articleTitle="Visualiza tus resultados en detalle" 
            articleSubTitle="Descubre cómo tus prejuicios influyen en tu entorno y tus relaciones."
            /> */}

            {/* <load src="/partials/article.html" 
            className="landing_desc_3" 
            imgUrl="" 
            imgAlt="" 
            articleTitle="Comparte lo que has descubierto" 
            articleSubTitle="Colabora con la reflexión colectiva y el desarrollo de una sociedad más consciente."
            /> */}
        </section>

        <section className="landing_link">
            <a className="landing_link_test" href="#">Descúbrelo &lt;en menos de 3min&gt;</a>
        </section>
    </main>

  )
}

export default Landing