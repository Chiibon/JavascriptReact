import React from 'react'

const Ads = () => {
  return (
    <div className='wrapper'>
      <section aria-label="Make your money transfer simple and clear" className="ads">
      <div className="container sp">

        <div className="wrapper">
          <div className="ad-grid space-y-1">
            <h1 className="h2">Make your money transfer simple and clear</h1>
            <div className="line">
              <div className="checkbox-icon">
                <img src="/images/boxcheckcirclewhite.svg" />
              </div>
              <p>Banking transactions are free for you</p>
            </div>
            <div className="line">
              <div className="checkbox-icon">
                <img src="/images/boxcheckcirclewhite.svg" />
              </div>
              <p>No monthly cash commission</p>
            </div>
            <div className="line">
              <div className="checkbox-icon">
                <img src="/images/boxcheckcirclewhite.svg" />
              </div>
              <p>Manage payments and transactions online</p>
            </div>
            <div className="learn-more">
              <a href="#" className="btn btn-primary">
                <span>Learn more</span>
                <img src="/images/ArrowRight.svg" alt="" />
              </a>
            </div>
          </div>
          <div className="graph-img">
            <img src="/images/graph.svg" />
          </div>
        </div>

        <div className="wrapper space-y-3">
          <div className="graph-img">
            <img src="/images/graph1.svg" />
          </div>
          <div className="ad-grid">
            <h2 className="class h2">Receive payments from internatoinal bank details</h2>
            
            <div className="line">
              <div className="checkbox-icon">
                <img src="/images/moneyicon1.svg" />
              </div>
              <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
            </div>

            <div className="line">
              <div lcass="checkbox-icon">
                <img src="/images/moneyicon2.svg" />
              </div>
              <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
            </div>
            <div className="learn-more">
              <a href="#" className="btn btn-primary">
                <span>Learn more</span>
                <img src="/images/ArrowRight.svg" alt="" />
              </a>
            </div>

          </div>
        </div>


      </div>
    </section>
    </div>
  )
}

export default Ads