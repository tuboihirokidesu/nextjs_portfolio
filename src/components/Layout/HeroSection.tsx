import React, { ReactNode } from 'react'
import {
  HeroContainer,
  HeroWrapper
} from '../../styles/pages/Layout/HeroSection'

type Props = {
  children?: ReactNode
}

const HeroSection: React.FC<Props> = ({ children }) => (
  <>
    <HeroContainer>
      <HeroWrapper>{children}</HeroWrapper>
    </HeroContainer>
  </>
)

export default HeroSection
