import React from 'react'

const Carouselhdiw = () => {
  return (
    <div className='wrapper'>
      <section aria-label="How does it work" className="carousel-section">
      <div className="container space-y-3">
        <h2 className="h1">How Does It Work?</h2>
        <div className="carousel">
          <div className="carousel-item">
            <img src="images/Iphone12ProLeft.svg" />
          </div>
          <div className="carousel-item">
            <img src="images/iPhone12ProMiddle.svg" />
          </div>
          <div className="carousel-item">
            <img src="images/Iphone12ProRight.svg" />
          </div>
        </div>
        <div className="text">
          <h3 className="h4">Latest transaction history</h3>
          <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum. </p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Carouselhdiw