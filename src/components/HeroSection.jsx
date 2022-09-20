import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../Styles/Button';
import { useGlobalContext } from '../context';

const HeroSection = () => {
    const {name, image}=useGlobalContext();
  return (
    <>
    <Wrapper>
        <div className="container grid grid-two-column">
            <div className="section-hero-data">
                <p className="hero-top-data">THIS IS ME</p>
                <h1 className="hero-heading">{name}</h1>
                <p className="hero-para">
                    I'm {name}. A ForntEnd Developer, and freelancer. A FrontEnd Devloper and frelancer.
                </p>
                <Button className="btn hireme-btn">
                <NavLink to="/contact">hire me</NavLink>
            </Button>
            </div>
            
            <div className="section-hero-image">
                <picture>
                    <img src={image} alt="hero1" className='hero-img'/>
                </picture>
            </div>
        </div>
    </Wrapper>
    </>
  )
}

const Wrapper=styled.section`

padding: 9rem 0;

.section-hero-image{
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.btn{
    max-width: 16rem;
}

.hero-top-data{
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({theme})=>theme.colors.helper};
}
.hero-heading{
    text-transform: uppercase;
    font-size: 4.4rem;
}

.hero-para{
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
}

.section-hero-image{
    display: flex;
    justify-content: center;
    align-items: center;
}

piture{
    text-align: center;
}



.hero-img{
    max-width: 80%;
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default HeroSection