import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles';
import {services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard =({index, title, icon})=>{
  return (
    <Tilt className='xs:w-[230px] w-full'>
      <motion.div
        variants={fadeIn("right","spring", 0.5*index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max:45,
            scale:1,
            speed:450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-8 min-h-[240px] flex justify-evenly items-center flex-col cursor-pointer'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>

      </motion.div>
      
    </Tilt>
  )
}


function About() {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("","",0.1,1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px'
      >
        Hi, I'm Natig Alizada, a passionate Frontend Developer from Baku, Azerbaijan. Currently pursuing a degree in Computer Engineering at Baku Higher Oil School, I specialize in creating responsive, user-friendly web applications. With experience in HTML, CSS, JavaScript, and React, I love turning creative ideas into functional and visually appealing digital experiences. Always eager to learn and collaborate, I strive to build impactful solutions that enhance user interaction. Let's create something amazing together!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index)=>(
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,"about");