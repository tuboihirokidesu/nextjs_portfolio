import { NextPage } from 'next'
import React from 'react'
import ArticleCard from '../components/ArticleCard'
import Layout from '../components/Layout'
import Navbar from '../components/Layout/Navbar'
import articleCardData from '../data/articleCardItem'
import styled from 'styled-components'

const Article: NextPage = () => (
  <>
    <Layout title="Article Page">
      <Navbar />
      <GridWrapper>
        {articleCardData.map(item => (
          <Container key={item.id}>
            <ArticleCard item={item} />
          </Container>
        ))}
      </GridWrapper>
    </Layout>
  </>
)

export default Article

const GridWrapper = styled.div`
  display: grid;
  padding-top: 90px;
  grid-template-columns: repeat(auto-fit, 20rem);
  justify-content: center;
`
const Container = styled.div`
  overflow: hidden;
  box-shadow: 0px 2px 8px 0px #37474f;
  background-color: white;
  text-align: center;
  border-radius: 1rem;
  position: relative;
  margin: 0.5rem;
`
