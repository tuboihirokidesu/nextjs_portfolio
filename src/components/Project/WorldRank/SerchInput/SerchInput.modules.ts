import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  background-color: ${props => props.theme.colors.primary};
  border-radius: 8px;
  padding-left: 16px;
`

export const Input = styled.input`
  color: ${props => props.theme.colors.text};
  border: none;
  background-color: transparent;
  padding: 16px;
  width: 100%;
  height: 100%;
  outline: none;

  ::placeholder {
    color: ${props => props.theme.colors.text};
  }
`
