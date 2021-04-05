import { FormControl, NativeSelect } from '@material-ui/core'
import React from 'react'
import styles from './Picker.module.scss'

const Picker = ({ data, handleChange }) => {
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
