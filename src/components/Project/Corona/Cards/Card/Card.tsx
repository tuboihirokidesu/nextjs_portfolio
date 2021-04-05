import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'

import styles from './Card.module.scss'
import styled from 'styled-components'

const CardComponent = ({ className, cardTitle, value, cardSubtitle }) => {
  const getDate8 = () => {
    const d = new Date()
    const z = (i: number, p: number) => ('0000' + i).slice(-p)
    return [
      z(d.getFullYear(), 4),
      z(d.getMonth() + 1, 2),
      z(d.getDate(), 2)
    ].join('/')
  }

  return (
    <Grid
      item
      xs={12}
      md={3}
      component={Card}
      className={cx(styles.card, className)}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {cardTitle}
        </Typography>
        <Wrap>
          <Typography variant="h5" component="h2">
            <CountUp start={0} end={value} duration={2.75} separator="," />
          </Typography>
          <Unit>人</Unit>
        </Wrap>
        <Typography color="textSecondary">更新 : {getDate8()}</Typography>
        <Typography variant="body2" component="p">
          {cardSubtitle}
        </Typography>
      </CardContent>
    </Grid>
  )
}
export default CardComponent

const Wrap = styled.div`
  display: flex;
`
const Unit = styled.p`
  font-size: 8px;
  margin-top: 12px;
  color: ${props => props.theme.colors.subtext};
`
