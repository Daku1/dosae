import React from 'react'
import Navbar from '../Navbar'
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  Herobtn,
} from './HeroElements'

const Hero = () => {
  return (
    <HeroContainer>
      <Navbar />
      <HeroContent>
        <HeroItems>
          <HeroH1>Greatest Dosae Ever</HeroH1>
          <HeroP>Ready in 60 seconds</HeroP>
          <Herobtn>Place Order</Herobtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
