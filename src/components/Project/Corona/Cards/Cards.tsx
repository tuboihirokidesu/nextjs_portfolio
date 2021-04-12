import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import styles from './Cards.module.scss'
import CardComponent from './Card/Card'
import { GetStaticProp } from '../../../../pages/project/corona/index'

const Cards: React.FC<GetStaticProp> = ({ data }) => {
  const prefecturesDistinction = (name: string): string => {
    if (name === '北海道') return `${name}`
    else if (name === '大阪' || name === '京都') return `${name}府`
    else if (name === '東京') return `${name}都`
    else return `${name}県`
  }
  const infectedNumber = (total: number, infectNumber: number): number => {
    const par = (infectNumber / total) * 100
    return Math.floor(par * Math.pow(10, 3)) / Math.pow(10, 3)
  }
  return (
    <div className={styles.container}>
      <Typography gutterBottom variant="h4" component="h2">
        コロナに関する集計
      </Typography>
      {data.map((item, index) => (
        <Grid key={index} container spacing={3} justify="center">
          <CardComponent
            className={styles.infected}
            cardTitle="Infected"
            value={item.cases}
            name={prefecturesDistinction(item.name_ja)}
            cardSubtitle={infectedNumber(item.population, item.cases)}
          />
          <CardComponent
            className={styles.pcr}
            cardTitle="PCR"
            value={item.pcr}
            name={prefecturesDistinction(item.name_ja)}
            cardSubtitle={infectedNumber(item.population, item.pcr)}
          />
          <CardComponent
            className={styles.deaths}
            cardTitle="Deaths"
            name={prefecturesDistinction(item.name_ja)}
            value={item.deaths}
            cardSubtitle={infectedNumber(item.population, item.deaths)}
          />
        </Grid>
      ))}
    </div>
  )
}

export default Cards
