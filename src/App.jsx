import './App.css'
import Ads from './components/Ads'
import AppFeatures from './components/AppFeatures'
import Carouselhdiw from './components/Carouselhdiw'
import ClientsTestimonial from './components/ClientsTestimonial'
import Customers from './components/Customers'
import Faq from './components/Faq'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {

  return (
    <div className='wrapper'>
      <Header/>
      <main id="main">
        <Hero />
        <Customers />
        <AppFeatures />
        <Carouselhdiw />
        <Ads />
        <ClientsTestimonial />
        <Faq />
      </main>
    </div>
  )
}

export default App
