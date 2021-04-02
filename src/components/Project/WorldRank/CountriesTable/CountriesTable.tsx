import Link from 'next/link'
import React, { useState } from 'react'
import { GetStaticProp } from '../../../../pages/project/world-ranks/index'
import {
  Area,
  Button,
  CountryFlag,
  Gini,
  Heading,
  HeadingArrow,
  Name,
  Population,
  Row,
  SubTitle
} from './CountriesTable.modules'

const orderBy = (countries, value, direction) => {
  if (direction === 'asc') {
    return [...countries].sort((a, b) => (a[value] > b[value] ? 1 : -1))
  }

  if (direction === 'desc') {
    return [...countries].sort((a, b) => (a[value] > b[value] ? -1 : 1))
  }

  return countries
}
const SortArrow = ({ direction }) => {
  if (direction === 'desc') {
    return <HeadingArrow>昇順</HeadingArrow>
  } else {
    return <HeadingArrow>降順</HeadingArrow>
  }
}
type Value = 'name' | 'population' | 'area' | 'gini' | null

type Props = {
  countries: GetStaticProp
}
const CountriesTable: React.FC<Props> = ({ countries }) => {
  const [direction, setDirection] = useState<'desc' | 'asc' | null>()
  const [value, setValue] = useState<Value>()

  const switchDirection = () => {
    if (!direction) setDirection('desc')
    else if (direction === 'desc') setDirection('asc')
    else setDirection(null)
  }
  const setValueAndDirection = (value: Value) => {
    switchDirection()
    setValue(value)
  }

  const orderedCountry = orderBy(countries, value, direction)
  return (
    <div>
      <Heading>
        <Button onClick={() => setValueAndDirection('name')}>
          <div>Name</div>
          {value === 'name' && (
            <>
              <div> : </div>
              <SortArrow direction={direction} />
            </>
          )}
        </Button>
        <Button onClick={() => setValueAndDirection('population')}>
          <div>Population</div>
          {value === 'population' && (
            <>
              <div> : </div>
              <SortArrow direction={direction} />
            </>
          )}
        </Button>
        <Button onClick={() => setValueAndDirection('area')}>
          <div>
            Area (km<sup style={{ fontSize: '0.5rem' }}>2</sup>)
          </div>
          {value === 'area' && (
            <>
              <div> : </div>
              <SortArrow direction={direction} />
            </>
          )}
        </Button>
        <Button onClick={() => setValueAndDirection('gini')}>
          <div>Gini</div>
          {value === 'gini' && (
            <>
              <div> : </div>
              <SortArrow direction={direction} />
            </>
          )}
        </Button>
      </Heading>

      {orderedCountry.map(country => (
        <Link
          href={`./world-ranks/country/${country.alpha3Code}`}
          key={country.numericCode}
        >
          <Row>
            <CountryFlag>
              <img src={country.flag} alt={country.name} />
            </CountryFlag>
            <Name>
              <strong>{country.name}</strong>
              <SubTitle>{country.translations.ja}</SubTitle>
            </Name>
            <Population>{country.population}</Population>
            <Area>{country.area || 0}</Area>
            <Gini>{country.gini || 0} %</Gini>
          </Row>
        </Link>
      ))}
    </div>
  )
}

export default CountriesTable
