import React, { useState } from 'react'
import Footer from '../Footer'
import './contact.scss'
export default function Contact() {

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    agree: false,
    message: "",
  })

  

  const handleChange = (e) => {
    const {name, value, type, checked} = e.target 
    setValues(prevValues => (
      {
        ...prevValues,
        [name]: type === 'checkbox'? checked : value

      }
    ))

  }
  console.log(values)
  return (
    <div id="contact-page">
      <header>
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
      </header>
      <main>
        <form>
          <div className='first-and-lastname'>
            <div>
              <label htmlFor='firstName'>First name</label><br/>
              <input onChange={handleChange} value={values.firstName} type="text" id="first_name" name="firstName" placeholder='Enter your first name' />
            </div>

            <div>
              <label htmlFor='lastName'>Last name</label><br />
              <input onChange={handleChange} value={values.lastName} type="text" id="last_name" name="lastName" placeholder='Enter your last name' />
            </div>
          </div>
          <label htmlFor="email">Email</label>
          <input onChange={handleChange} value={values.email} type="email" id="email" name="email" placeholder='yourname@email.com' />

          <label htmlFor="message">Message</label>
          <textarea onChange={handleChange} value={values.message} name="message" id="message" placeholder="Send me a message and i'll reply you as soon as possible..." />

          
         
          
          
          <label htmlFor="agree">
            <input onChange={handleChange} checked={values.agree} type="checkbox" name="agree" />
            You agree to providing your data to &#123;name&#125; who may contact you.
          </label>

          <button id="btn__submit" type="submit">Send message</button>
          
          


        </form>
      </main>
      
      
      <Footer />
    </div>
      
    
  )
}
