import styled from 'styled-components'
import colors from '../../styleguide/constants/colors'

export const AppContainer = styled.div`
  width: 90vw;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.backgroundColor};
  box-shadow: 0 1px 4px 0 ${colors.boxShadow};
  @media (max-width: 550px) {
    height: 95%;
    overflow: scroll;
  }
`
export const Heading = styled.h1`
  color: ${colors.textBlack};
  margin: 50px;
`
export const SearchAndItemsArea = styled.div`
  width: 90%;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3%;
  @media (max-width: 550px) {
    margin: 0%;
  }
`
export const SearchBar = styled.input`
  width: 90%;
  max-width: 400px;
  min-width: 100px;
  height: 30px;
  border: none;
  font-size: 14px;
  color: ${colors.textBlack};
  font-weight: 500;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${colors.textGrey};
    font-size: 14px;
    font-weight: 500;
  }
`
export const SearchBarContainer = styled.div`
  width: 90%;
  max-width: 300px;
  height: 50px;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;
  box-sizing: border-box;
  box-shadow: 0 1px 3px ${colors.boxShadow};
  background: white;
  margin-bottom: 30px;
  padding: 10px 30px;
  box-sizing: border-box;
`


const Icon = styled.div`
  width: 20px;
  height: 20px;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  &:hover {
    cursor: pointer;
  }
`
export const LeftIcon = styled(Icon)`
  margin-right: 20px;
`


export const MarketObjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 550px) {
    justify-content: center;
  }
`
