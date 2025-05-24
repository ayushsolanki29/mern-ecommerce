import React from 'react'
import heroImage from '../../images/rabbit-hero.webp'
import { Link } from 'react-router-dom'
import HeroSlider from './heroSlider'
const Hero = () => {



    return (
        <section className='relative'>
          <HeroSlider/>
        </section>
    )
}

export default Hero
