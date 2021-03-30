import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  IconWrap,
  MenuIcon,
  Nav,
  NavMenuLinks,
  NavMenu,
  NavBtn
} from '../../styles/pages/Layout/Navbar'
import { faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons'
import { NavMenuData } from '../../data/navMenuData'
import Button from '../../styles/pages/Button'

const Navbar: React.FC = () => {
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)

  const closeMobileMenu = () => setClick(false)

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground)
    return () => {
      window.removeEventListener('scroll', changeBackground)
    }
  }, [])

  const handleClick = () => setClick(!click)
  return (
    <Nav
      className={scroll ? 'scroll-bg-change' : 'click-bg-change'}
      scroll={scroll}
      click={click}
    >
      <IconWrap onClick={handleClick}>
        <MenuIcon icon={click ? faTimes : faChevronRight} />
      </IconWrap>
      <NavMenu click={click}>
        {NavMenuData.map(item => (
          <Link key={item.id} href={item.href} passHref>
            <NavMenuLinks className="nav-links" onClick={closeMobileMenu}>
              {item.title}
            </NavMenuLinks>
          </Link>
        ))}
      </NavMenu>
      <NavBtn>
        <Button
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/tuboihirokidesu/portfolio"
          primary
          big={false}
        >
          GitHub
        </Button>
      </NavBtn>
    </Nav>
  )
}

export default Navbar
