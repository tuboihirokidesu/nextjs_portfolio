import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  IconWrap,
  MenuIcon,
  Nav,
  NavMenuLinks,
  NavBtn,
  NavMenuContainer,
  NavMenuWrap
} from '../../styles/pages/Layout/Navbar'
import { faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons'
import { NavMenuData } from '../../data/navMenuData'
import Button from '../../styles/pages/Button'
import { useRouter } from 'next/router'

const Navbar: React.FC = () => {
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)

  const router = useRouter()

  const closeMobileMenu = () => setClick(false)
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }
  const handleClick = () => setClick(!click)

  useEffect(() => {
    window.addEventListener('scroll', changeBackground)
    return () => {
      window.removeEventListener('scroll', changeBackground)
    }
  }, [])
  return (
    <Nav
      className={scroll ? 'scroll-bg-change' : 'click-bg-change'}
      scroll={scroll}
      click={click}
    >
      <IconWrap onClick={handleClick}>
        <MenuIcon icon={click ? faTimes : faChevronRight} />
      </IconWrap>
      <NavMenuContainer click={click}>
        <NavMenuWrap className={router.pathname === '/' ? 'active' : ''}>
          <Link href="/" passHref>
            <NavMenuLinks className="nav-links" onClick={closeMobileMenu}>
              Home
            </NavMenuLinks>
          </Link>
        </NavMenuWrap>
        <NavMenuWrap className={router.pathname === '/article' ? 'active' : ''}>
          <Link href="/article" passHref>
            <NavMenuLinks className="nav-links" onClick={closeMobileMenu}>
              Article
            </NavMenuLinks>
          </Link>
        </NavMenuWrap>
        <NavMenuWrap className={router.pathname === '/project' ? 'active' : ''}>
          <Link href="/project" passHref>
            <NavMenuLinks className="nav-links" onClick={closeMobileMenu}>
              Project
            </NavMenuLinks>
          </Link>
        </NavMenuWrap>

        {/* {NavMenuData.map(item => (
          <div
            key={item.id}
            className={router.pathname = {item.href} ? 'active' : ''}
          >
          </div>
        ))} */}
      </NavMenuContainer>
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
