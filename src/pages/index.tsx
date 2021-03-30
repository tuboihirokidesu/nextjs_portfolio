import React from 'react'
import HeroSection from '../components/Layout/HeroSection'
import { HeroParagraph, HeroHeader } from '../styles/pages/Layout/HeroSection'
import Navbar from '../components/Layout/Navbar'
import styled from 'styled-components'
import Particles from 'react-particles-js'
import Layout from '../components/Layout'

const Particle = styled(Particles)`
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 1;
`

const Home: React.FC = () => {
  return (
    <>
      <Layout title="Home Page">
        <main>
          <Particle
            params={{
              particles: {
                number: {
                  value: 30,
                  density: {
                    enable: true,
                    value_area: 900
                  }
                },
                shape: {
                  type: 'circle',
                  stroke: {
                    width: 6,
                    color: '#fa923f'
                  }
                }
              }
            }}
          />

          <Navbar />
          <HeroSection>
            <HeroHeader strings={['Portfolio']} typeSpeed={80} />
            <HeroParagraph
              strings={['Hiroki', 'Tsuboi']}
              typeSpeed={70}
              backSpeed={40}
              loop
            />
          </HeroSection>
        </main>
      </Layout>
    </>
  )
}

export default Home
