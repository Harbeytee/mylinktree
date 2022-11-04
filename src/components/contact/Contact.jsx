import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import Footer from '../Footer'
import './contact.scss'
export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  

  const onSubmit = (data) => {
    console.log(data)
  }


  
  
  return (
    <div id="contact-page">
      <header>
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
      </header>
      <main>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='first-and-lastname'>

            <div className='input-container'>
              <label htmlFor='firstName'>First name</label><br/>
              <input style={{border: errors.firstName ? '1px solid red': '1px solid #D0D5DD'}}
              type="text" 
              id="first_name" 
              name="firstName" 
              placeholder='Enter your first name'
              {...register("firstName", {required: true})}
               />
               {errors.firstName && <p className='error-msg'>Please enter a firstName</p>}
            </div>

            <div className='input-container'>
              <label htmlFor='lastName'>Last name</label><br />
              <input style={{border: errors.lastName ? '1px solid red': '1px solid #D0D5DD'}}
              type="text" 
              id="last_name" 
              name="lastName" 
              placeholder='Enter your last name' 
              {...register("lastName", {required: true})}
              />
              {errors.lastName && <p className='error-msg'>Please enter a lastName</p>}
            </div>
          </div>

          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input style={{border: errors.email ? '1px solid red': '1px solid #D0D5DD'}}
            type="email" 
            id="email" 
            name="email" 
            placeholder='yourname@email.com' 
            {...register("email", 
            {required: true, 
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
            />
            {errors.email && <p className='error-msg'>Please enter a valid email</p>}
          </div>
          
          <div className="input-container">
            <label htmlFor="message">Message</label>
            <textarea style={{border: errors.firstName ? '1px solid red': '1px solid #D0D5DD'}}
            name="message" 
            id="message" 
            placeholder="Send me a message and i'll reply you as soon as possible..." 
            {...register("message", {required: true})}
            />
            {errors.email && <p className='error-msg'>Please enter a message</p>}
          </div>

          

          
         
          
          
          <label className="agree" htmlFor="agree">
            <input  type="checkbox" name="agree" {...register("agree")}/>
            You agree to providing your data to &#123;name&#125; who may contact you.
          </label>

          <button id="btn__submit" type="submit">Send message</button>
          
          


        </form>
      </main>
      
      
      <Footer />
    </div>
      
    
  )
}
