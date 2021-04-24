import { FormControl, NativeSelect } from '@material-ui/core'
import { NextPage } from 'next'
import React from 'react'
import styles from './Picker.module.scss'

type Props = {
  data: string[]
  handleChange: (prefecture: string) => Promise<void>
}

const Picker: NextPage<Props> = ({ data, handleChange }) => {
  return (
    <div>
      <FormControl className={styles.formControl}>
        <NativeSelect
          defaultValue=""
          onChange={e => handleChange(e.target.value)}
        >
          <option value="">----</option>
          {data.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  )
}

export default Picker
