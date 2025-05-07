import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevent page reload

    emailjs.sendForm('service_d2utn1k', 'template_faa1oxc', form.current, 'bgkARWVJ69BOJXVd8')
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully! 🚀");
          form.current.reset(); // reset form after send
      }, (error) => {
          console.log(error.text);
          alert("Failed to send message ❌");
      });
  };

  return (
    <div className='bg-black text-white py-20' id='contact'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>Contact me</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
          
          <div className='flex-1'>
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 mb-4'>Let's Talk</h3>
            <p className='mb-8'>I am open to discussing web development, graphic design, or partnership opportunities.</p>
            
            <div className='mb-4'>
              <FaEnvelope className='inline-block text-yellow-400 mr-2' />
              <a href="mailto:yoni13awoke@gmail.com" className='hover:underline'>yon13awoke@gmail.com</a>
            </div>
            
            <div className='mb-4'>
              <FaPhone className='inline-block text-yellow-400 mr-2' />
              <span>+251955178307</span>
            </div>

            <div className='mb-4'>
              <FaMapMarkedAlt className='inline-block text-yellow-400 mr-2' />
              <span>Addis Ababa, ETHIOPIA</span>
            </div>
          </div>

          <div className='flex-1 w-full'>
            <form ref={form} onSubmit={sendEmail} className='space-y-4'>
              
              <div>
                <label htmlFor="user_name" className='block mb-2'>Your Name</label>
                <input type="text" name="user_name" className='w-full p-2 rounded bg-gray-500 border-gray-500 focus:outline-none focus:border-green-400' placeholder='Enter your name' required />
              </div>

              <div>
                <label htmlFor="user_email" className='block mb-2'>Email</label>
                <input type="email" name="user_email" className='w-full p-2 rounded bg-gray-500 border-gray-500 focus:outline-none focus:border-green-400' placeholder='Enter your email' required />
              </div>

              <div>
                <label htmlFor="message" className='block mb-2'>Message</label>
                <textarea name="message" className='w-full p-2 rounded bg-gray-500 border-gray-500 focus:outline-none focus:border-green-400' rows={5} placeholder='Enter your message' required />
              </div>

              <button type="submit" className='bg-yellow-400 text-black border border-yellow-400 rounded-full px-8 py-2 hover:bg-transparent hover:text-yellow-400 transition '>Send</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact;
