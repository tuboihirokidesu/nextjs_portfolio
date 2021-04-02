import { GetServerSideProps } from 'next'
import React from 'react'
import axios from 'axios'
import Layout from '../../../../components/Layout'
import CountryPage from '../../../../components/Project/WorldRank/CountryPage/CountryPage'

const Country = ({ country }) => {
  console.log(country)

  return (
    <Layout title={country.name}>
      <CountryPage country={country} />
    </Layout>
  )
}

export default Country

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `https://restcountries.eu/rest/v2/alpha/${params.id}`
  )
  const country = await res.data

  return {
    props: {
      country
    }
  }
}
