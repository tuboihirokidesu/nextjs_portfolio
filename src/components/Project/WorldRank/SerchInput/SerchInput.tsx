import React from 'react'
import SearchRounded from '@material-ui/icons/SearchRounded'
import { Input, Wrapper } from './SerchInput.modules'

type Props = {
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const SearchInput: React.FC<Props> = ({ ...rest }) => {
  return (
    <Wrapper>
      <SearchRounded />
      <Input {...rest} />
    </Wrapper>
  )
}

export default SearchInput
