import React from 'react'

const Customers = () => {
  return (
    <div className="wrapper">
      <section aria-label="our customers" className="logos">
        <div className="container">
          <div className="logo-card">
            <img src="/images/logoipsum.svg" alt="logoipsum logotype" />
          </div>
          <div className="logo-card">
            <img src="/images/logoipsum1.svg" alt="logoipsum logotype"/>
          </div>
          <div className="logo-card">
            <img src="/images/logoipsum2.svg" alt="logoipsum logotype"/>
          </div>
          <div className="logo-card">
            <img src="/images/logoipsum3.svg" alt="logoipsum logotype"/>
          </div>
          <div className="logo-card">
            <img src="/images/logoipsum4.svg" alt="logoipsum logotype"/>
          </div>
          <div className="logo-card">
            <img src="/images/logoipsum5.svg" alt="logoipsum logotype"/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Customers