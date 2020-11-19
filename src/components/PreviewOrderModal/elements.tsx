import styled from 'styled-components'
import colors from '../../styleguide/constants/colors'

export const ItemContainer = styled.div`
  display: flex; 
  width: 100%; 
  margin: 10px 50px;
`

export const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  margin: 10px 50px;
  box-shadow: 0 1px 4px 0 ${colors.boxShadow};
`

export const Info = styled.div`
  display: flex;
  align-items: center;  
`
export const SumContainer = styled.div`
  margin: 50px;
`
