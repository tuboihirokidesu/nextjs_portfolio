import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import styles from './Cards.module.scss'
import CardComponent from './Card/Card'
import { GetStaticProp } from '../../../../pages/project/corona/index'

const Cards: React.FC<GetStaticProp> = ({ data }) => {
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
            cardSubtitle="Number of active cases from COVID-19."
          />
          <CardComponent
            className={styles.pcr}
            cardTitle="PCR"
            value={item.pcr}
            cardSubtitle="Number of recoveries from COVID-19."
          />
          <CardComponent
            className={styles.deaths}
            cardTitle="Deaths"
            value={item.deaths}
            cardSubtitle="Number of deaths caused by COVID-19."
          />
        </Grid>
      ))}
    </div>
  )
}

export default Cards
