import styled from 'styled-components'
import colors from '../../styleguide/constants/colors'

export const TableLine = styled.div`
  background: white;
  padding: 10px 20px;
  height: 58px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`

export const ItemContainer = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
  margin: 20px 30px;
  padding: 20px;
  position: relative;
  &:hover {
    cursor: pointer;
  }
`

export const ItemImageContainer = styled.div`
  width: 180px;
  height: 180px;
  margin: 10px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 550px) {
    width: 80vw;
    height: 80vw;
  }
`
export const ItemImage = styled.img`
  max-width: 180px;
  max-height: 180px;
  width: auto;
  height: auto;
`
export const ItemText = styled.div`
  color: black;
  // font-weight: 400;
  font-size: 20px;
  margin: 10px;
`
export const TableContentBox = styled.td`
  height: 30px;
  font-size: 15px;
  width: 400px;
  display: flex;
  align-items: center;
  margin-right: 30px;
`
export const TextContainer = styled.div`
  font-weight: 500;
  color: ${colors.textBlack};
`
export const DoneTextContainer = styled.div`
  color: ${colors.textGreen};
  text-decoration: line-through;
  font-weight: 500;
`
const Icon = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 20px;
  height: 20px;
  z-index: 10;
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
export const PencilIcon = styled(LeftIcon)`
  background-image: url('./pencil.svg');
  filter: invert(85%) sepia(13%) saturate(319%) hue-rotate(170deg)
    brightness(86%) contrast(90%);
`
export const DoneIcon = styled(LeftIcon)`
  background-image: url('./done.svg');
  filter: invert(67%) sepia(68%) saturate(292%) hue-rotate(89deg)
    brightness(84%) contrast(83%);
`
export const UndoneIcon = styled(LeftIcon)`
  background-image: url('./undone.svg');
`
export const TrashIcon = styled.td`
  background-image: url('./trash.svg');
  width: 13px;
  height: 13px;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
`
export const ClearAllContainer = styled.div`
  height: 150px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.textGrey};
  font-weight: 700;
  text-transform: uppercase;
`
export const ClearAll = styled.div`
  width: 100px;
  height: 30px;
  align-items: center;
  display: flex;
`

export const EmptyPrompt = styled.div`
  text-align: left;
  padding-left: 60px;
  font-size: 12px;
  font-weight: 500;
  color: ${colors.textGrey};
`
export const Regular = styled.div`
  font-size: 14px;
`
export const EmptySpace = styled.div`
  height: 53px;
`
