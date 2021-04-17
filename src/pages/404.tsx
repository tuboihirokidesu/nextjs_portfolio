import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
import styled from 'styled-components'

const NotFound: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 4000)
  }, [])

  return (
    <NotFoundContainer>
      <h1>404</h1>
      <h2>Oops! That page cannot be found :(</h2>
      <p>
        Redirecting to
        <Link href="/">
          <a>Homepage</a>
        </Link>
        for more marmite goodness...
      </p>

      <style jsx>{`
        h1 {
          font-size: 3em;
        }
      `}</style>
    </NotFoundContainer>
  )
}
export default NotFound

const NotFoundContainer = styled.div`
  background: #fff;
  padding: 30px;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  transform: rotateZ(-1deg);
`
