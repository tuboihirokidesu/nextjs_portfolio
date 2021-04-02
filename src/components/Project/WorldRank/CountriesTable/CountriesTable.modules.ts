import styled from 'styled-components'

export const Heading = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
`

export const Button = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  flex: 4;
  color: ${props => props.theme.colors.text};
  font-weight: 500;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  :nth-child(2) {
    margin-left: 40px;
  }
  @media screen and (max-width: 720px) {
    :nth-child(n + 3) {
      display: none;
    }
  }
`

export const Row = styled.div`
  display: flex;
  padding: 20px;

  text-align: center;

  background-color: ${props => props.theme.colors.background};
  border-radius: 8px;
  margin-bottom: 16px;
  border: 1px solid gray;
  box-shadow: ${props => props.theme.colors.background};
  font-weight: 500;

  transition: transform 200ms ease-in-out, box-shadow 200ms ease-in-out;
  align-items: center;

  :hover {
    transform: translateY(-4px);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  }
`

export const Name = styled.div`
  flex: 4;
  text-align: left;
`

export const Population = styled.div`
  flex: 4;
`
export const Area = styled.div`
  flex: 4;
  @media screen and (max-width: 720px) {
    display: none;
  }
`

export const Gini = styled.div`
  flex: 4;
  @media screen and (max-width: 720px) {
    display: none;
  }
`

export const CountryFlag = styled.div`
  flex: 1;
  margin-right: 16px;
  text-align: left;

  & > img {
    border-radius: 3px;
    width: 100%;
  }
`

export const HeadingArrow = styled.div`
  color: ${props => props.theme.colors.primary};

  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 2px;
`

export const SubTitle = styled.div`
  color: ${props => props.theme.colors.subtext};
  font-size: 10px;
  margin-top: 2px;
`
