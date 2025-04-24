import React from 'react'

function ImagesGrid() {
  return (
    <section className="test_images">
        {/* añadir icono colapsable */}
        <div className="test_images_1">
            <img src="../images/white-woman-1.jpg" alt=""/>
        </div>

        <div className="test_images_2">
            <img src="../images/asian-man-1.jpg" alt=""/>
        </div>

        <div className="test_images_3">
            <img src="../images/white-man-1.jpg" alt=""/>
        </div>

        <div className="test_images_4">
            <img src="../images/black-woman-1.jpg" alt=""/>
        </div>

        <div className="test_images_5">
            <img src="../images/asian-woman-1.jpg" alt=""/>
        </div>

        <div className="test_images_6">
            <img src="../images/white-man-2.jpg" alt=""/>
        </div>

        <div className="test_images_7">
            <img src="../images/black-man-1.jpg" alt=""/>
        </div>

        <div className="test_images_8">
            <img src="../images/black-woman-2.jpg" alt=""/>
        </div>
    </section>
  )
}

export default ImagesGrid