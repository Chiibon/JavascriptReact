import React, { useEffect, useState } from 'react'
import AccordionItem from './AccordionItem'

const Faq = () => {
  const [accordions, setAccordions] = useState([])
  const fetchFaq = async () => {
    const res = await fetch ('https://win24-assignment.azurewebsites.net/api/faq')
    const data = await res.json()
    setAccordions(data)
  }
  useEffect(() => {
    fetchFaq()
  }, [])
  return (
    <div className='wrapper'>
      <section className='faq'>
        <div className='container'>

          <div className='first-column'>
            <div className='faq'>
            <h2>Any questions?<br></br>Check out the FAQs</h2>
            <p>Still have unanswered questions and need to get in touch?</p></div>

            <div className='contact-options'>
              <div className='phone-icon'>
                <img src="/images/phone.svg"></img>
              </div>
              <p>Still have questions?</p>
              <div className='contactus'>
              <br></br><a href="#"><p className='bold1'>Contact us</p></a>
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

        <div className='second-column'>
          <div className='accordion'>
            {
              accordions.map(item => (
                <AccordionItem key={item.id} item={item} />
              ))
            }
            
          </div>

        </div>
      </section>
    </div>
  )
}

export default Faq