import React, { useState } from 'react'
import { Cards, Charts, Picker } from '../../../components/Project/Corona/index'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import axios from 'axios'
import Layout from '../../../components/Layout'
import styled from 'styled-components'
export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get(
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

export type GetStaticProp = InferGetStaticPropsType<typeof getStaticProps>

const index: React.FC<GetStaticProp> = ({ data, nameData }) => {
  const [stateData, setStateData] = useState([])
  // const [stateData1, setStateData1] = useState([])

  const handlePrefectureChange = async (prefecture: string) => {
    // eslint-disable-next-line camelcase
    const fetchData = await data.filter(({ name_ja }) => name_ja === prefecture)
    // const fetchData1 = await data1.filter(({ Name }) => Name === prefecture)
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
