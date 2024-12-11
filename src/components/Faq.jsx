import React from 'react'

const Faq = () => {
  return (
    <div className='wrapper'>
      <section className='faq'>
        <div className='container'>
          <div className='first-column'>
            <h2>Any questions?<br></br>Check out the FAQs</h2>
            <p>Still have unanswered questions and need to get in touch?</p>
            <div className='contact-options'>
              <div className='phone-icon'>
                <img src="/images/phone.svg"></img>
              </div>
              <p>Still have questions?</p>
              <div className='contactus'>
              <br></br><p className='bold1'>Contact us</p>
              <div className='icon-r'><img src='/images/icon-r.svg'></img></div>
              </div>
            </div>
            <div className='contact-options'>
              <div className='phone-icon'>
                <img src="/images/message.svg"></img>
              </div>
              <p>Don't like phone calls?</p>
              <div className='contactus'>
              <br></br><a href="#"><p className='bold2'>Contact us</p></a>
              <div className='icon-r'><img src='/images/icon-rg.svg'></img></div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Faq