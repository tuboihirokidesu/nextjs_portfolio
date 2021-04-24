/* eslint-disable camelcase */
import React, { useState } from 'react'
import { Cards, Charts, Picker } from '../../../components/Project/Corona/index'
import { InferGetStaticPropsType, NextPage } from 'next'
import axios from 'axios'
import Layout from '../../../components/Layout'
import styled from 'styled-components'

export interface CovidData {
  cases: number
  deaths: number
  discharge: number
  hospitalize: number
  id: number
  last_updated: {
    cases_date: number
    deaths_date: number
    discharge_date: number
    hospitalize_date: number
    pcr_date: number
    severe_date: number
    symptom_confirming_date: number
  }
  lat: number
  lng: number
  name_en: string
  name_ja: string
  pcr: number
  population: number
  severe: number
  symptom_confirming: number
}
export const getStaticProps: () => Promise<{
  props: {
    data: CovidData[]
    nameData: string[]
  }
}> = async () => {
  const res = await axios.get<CovidData[]>(
    'https://covid19-japan-web-api.now.sh/api//v1/prefectures'
  )
  // const res1 = await axios.get(
  //   'https://opendata.arcgis.com/datasets/74221f77537b4e31bf6860356945e887_0.geojson'
  // )

  const data = await res.data
  // const data1 = await res1.data.features.map(item => item.properties)

  const nameData = await res.data.map(item => item.name_ja)

  return {
    props: {
      data,
      nameData
    }
  }
}

type Props = InferGetStaticPropsType<typeof getStaticProps>

const index: NextPage<Props> = ({ data, nameData }) => {
  const [stateData, setStateData] = useState<CovidData[]>([])

  const handlePrefectureChange = async (prefecture: string) => {
    const fetchData = await data.filter(({ name_ja }) => name_ja === prefecture)
    setStateData(fetchData)
  }
  return (
    <Layout title="corona in Japan">
      <Container>
        <Cards data={stateData} />
        <Picker data={nameData} handleChange={handlePrefectureChange} />
        <Charts />
      </Container>
    </Layout>
  )
}

export default index

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
