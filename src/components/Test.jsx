import React from 'react'
import Header from './Header'
import ImagesGrid from './ImagesGrid'
import DynamicPhrases from './DynamicPhrases'

function Test() {
  return (
    <>
    <Header/>
    <main className="test">

        <section className="test_instr">
            <h2>Asocia las frases que van apareciendo con las imágenes <span className="test_instr_colapse">en el colapsable</span>.</h2>
        </section>

        <ImagesGrid/>
        
        <DynamicPhrases/>
    </main>
    </>
  )
}

export default Test