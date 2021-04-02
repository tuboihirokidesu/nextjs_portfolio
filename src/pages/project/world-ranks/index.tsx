import React, { useState } from 'react'
import Layout from '../../../components/Layout'
import Link from 'next/link'
import styled from 'styled-components'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import axios from 'axios'
import SearchInput from '../../../components/Project/WorldRank/SerchInput/SerchInput'
import CountriesTable from '../../../components/Project/WorldRank/CountriesTable/CountriesTable'
import Header from '../../../components/Project/WorldRank/Layout/Header'

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get('https://restcountries.eu/rest/v2/all')
  const countries = await res.data

  return {
    props: {
      countries
    }
  }
}

export type GetStaticProp = InferGetStaticPropsType<typeof getStaticProps>

const Home: React.FC<GetStaticProp> = ({ countries }) => {
  const [keyword, setKeyword] = useState<string>('')

  const filterCountries = countries.filter(
    country =>
      country.name.toLowerCase().includes(keyword) ||
      country.region.toLowerCase().includes(keyword) ||
      country.subregion.toLowerCase().includes(keyword)
  )

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setKeyword(e.target.value.toLowerCase())
  }
  return (
    <Layout title="World Ranks">
      <Container>
        <Header />
        <main>
          <Counts>Found {countries.length} countries</Counts>
          <SearchInput
            placeholder="Filter by Name, Region or SubRegion"
            onChange={onInputChange}
          />
          <CountriesTable countries={filterCountries} />
        </main>
        <footer>footer</footer>
      </Container>
    </Layout>
  )
}

export default Home

const Container = styled.div`
  padding: 24px;
  height: 100vh;

  display: grid;
  grid-template-rows: auto 1fr auto;

  max-width: 1100px;
  margin: 0 auto;
`

const Counts = styled.div`
  margin: 12px 0;
`
