import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'

import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';



//template_i7ayoof
//service_dcplket servkey
//Kwl4KbDld9fqIx6c2 pubkey


const Contact=()=> {
  const formRef= useRef();
  const [form, setForm]=  useState({
    name:'',
    email:'',
    message:'',
  });

  const [loading, setLoading] = useState(false);

  const handleChange= (e)=> {
    const { name,value } = e.target;
    setForm({...form,[name]:value })
    
    
  };

  const handleSubmit = (e)=> {
    e.preventDefault();
    setLoading(true); 

    emailjs.send(
      'service_dcplket',
      'template_i7ayoof',
      {
        from_name:form.name,
        to_name:"Natig Alizada",
        from_email:form.email,
        to_email:'elizade.natiq58@gmail.com',
        message:form.message
      },
      'Kwl4KbDld9fqIx6c2'
    )
    .then(()=>{
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");

      setForm({
        name:'',
        email:'',
        message:''
      },(error)=>{
        setLoading(false);
        console.log(error);
        alert('Something went wrong.')
      })
    })
  };


  return (
    <div className={`lg:mt-12 flex flex-col-reverse lg:flex-row  gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween",0.2, 1)}
        className='flex-[0.75] bg-black p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label htmlFor="nameid"
            className='flex flex-col'
          >
            <span className='text-white'>
              Your name
            </span>
            <input 
              type="text" 
              id='nameid'
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-3 mt-3 px-6 placeholder:text-secondary
              text-white rounded-lg outlined-none border-none font-medium' 
              
            />

          </label>
          <label htmlFor="emailid"
            className='flex flex-col'
          >
            <span className='text-white'>
              Your Email
            </span>
            <input 
              type="email" 
              id='emailid'
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 mt-3 px-6 placeholder:text-secondary
              text-white rounded-lg outlined-none border-none font-medium'               
            />

          </label>
          <label htmlFor="messageid"
            className='flex flex-col'
          >
            <span className='text-white'>
              Your Message
            </span>
            <textarea 
              rows={5}
              name="message"
              id="messageid"
              value={form.message}
              onChange={handleChange}
              placeholder='Write your message'
              className='bg-tertiary py-4 mt-3 px-6 placeholder:text-secondary
              text-white rounded-lg outlined-none border-none font-medium' 
              
            />

          </label>
          <button 
            type='submit'
            className='bg-tertiary py-2 px-7 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-slate-600 transition
            duration-500  border-2 border-white ' 
          >{loading? 'Sending...': 'Send'}</button>
        </form>

      </motion.div>
      <motion.div
        variants={slideIn("right","tween", 0.2 , 1)}
        className='lg:flex-1 lg:h-auto md:h-[450px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")