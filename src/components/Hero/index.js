import React, { useState } from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import {
    HeroContainer,
    HeroContent,
    HeroItems,
    HeroH1,
    HeroP,
    Herobtn,
} from './HeroElements'

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <HeroContainer>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
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
