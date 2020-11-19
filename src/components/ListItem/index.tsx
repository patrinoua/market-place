import React, {useState} from 'react'
import {
    DoneIcon,
  UndoneIcon,
  ItemContainer,
  ItemImageContainer,
  ItemImage,
  ItemText
} from './elements'
import {selectId} from "../MarketList/itemsSlice"
import { useDispatch } from "react-redux"

interface ItemProps {
  id: number
  selected: boolean
  title: string
  description: string
  image_url: string
  price: string
}
interface ListItemProps {
  item: ItemProps
  toggleItemInfoHandler: (item: any) => void
  toggleBuyWizardHandler: (item: any) => void
}

function ListItem({ item, toggleItemInfoHandler, toggleBuyWizardHandler }: ListItemProps) { 
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(item.selected)
  return (
    <ItemContainer
      key={item.id}

    >
      <div onClick={() => {
        setSelected(!selected)
        dispatch(selectId(item.id))}}>
        {selected ? <DoneIcon /> : <UndoneIcon />}
      </div>
      <ItemImageContainer>
        <ItemImage src={item.image_url} onClick={() => toggleItemInfoHandler(item)}/>
      </ItemImageContainer>
      <ItemText onClick={() => toggleItemInfoHandler(item)}>{item.title}</ItemText>
    </ItemContainer>
)}

export default ListItem
