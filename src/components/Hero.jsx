import React from 'react'

const Hero = () => {
  return (
    <div id="wrapper">
      <main id="main">
        <section aria-label="showcase" className="showcase">
          <div className="container space-y-3">
            <h1 className="d4">Manage All Your Money in One App</h1>
            <div className="content space-y-3">
              <p className="text-lg">We offer you a new generation of the mobile banking.
              Save, spend & manage money in your pocket.</p>
              <div className="market-btns">
                <a href="#" className="store-btn">
                  <span className="sr-only">Download on the App Store</span>
                  <img className="show-light" src="images/AppStoreLight.svg" alt=""></img>
                  <img className="show-dark" src="images/AppStoreDark.svg" alt=""></img>
                </a>
                <a href="#" className="store-btn">
                  <span className="sr-only">Get it on Google Play</span>
                  <img className="show-light" src="images/googleplay-light.svg" alt=""></img>
                  <img className="show-dark" src="images/googleplaydark.svg" alt=""></img>
                </a>
              </div>
              <div className="more">
                <a href="#features" className="btn-round btn-white">
                  <i className="fa-sharp fa-solid fa-chevron-down"></i>
                </a>
                <span>Discover More</span>
              </div>
            </div>
            <div className="phone-img-container">
              <img src="/images/Phones.svg" alt=""></img>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Hero