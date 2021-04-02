import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import React from 'react'
import axios from 'axios'
import Layout from '../../../../components/Layout'
import CountryPage from '../../../../components/Project/WorldRank/CountryPage/CountryPage'

const getCountry = async id => {
  const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${id}`)

  const country = await res.json()

  return country
}

const Country: React.FC<GetStaticProp> = ({ country }) => {
  return (
    <Layout title={country.name}>
      <CountryPage country={country} />
    </Layout>
  )
}

export default Country

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get('https://restcountries.eu/rest/v2/all')
  const countries = await res.data
  const paths = countries.map(country => ({
    params: { id: country.alpha3Code }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const country = await getCountry(params.id)

  return {
    props: {
      country
    }
  }
}

type GetStaticProp = InferGetStaticPropsType<typeof getStaticProps>
