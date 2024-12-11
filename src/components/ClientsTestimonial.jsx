import React, { useEffect, useState } from 'react'
import Testimonial from './Testimonial'

const ClientsTestimonial = () => { 
  const [testimonials, setTestimonials] = useState([])
  
  const getTestimonials = async () => {
    const res = await fetch ('https://win24-assignment.azurewebsites.net/api/testimonials')
    const data = await res.json()
    setTestimonials(data)
  }

  useEffect(() => {
    getTestimonials()
  }, [])

 

  return (
    <div className='wrapper'>
      <div className='container'>
      <section className='testiomonial-section'>
        <div className='wrapper'>
          <div className='first-column'>
            <h2 className='h4'>Clients are Loving Our App</h2>
          </div>
          <div className='second-column'>
            <div className='testimonials'>
              {
                testimonials.map((testimonial) => (
                <Testimonial key={testimonial.id} item={testimonial} />
                ))
              }
            </div>
          </div>
        </div>

      </section>
      </div>
    </div>
  )
}

export default ClientsTestimonial