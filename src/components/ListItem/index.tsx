import React from 'react'
import {
  ItemContainer,
  ItemImageContainer,
  ItemImage,
  ItemText
} from './elements'

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

const ListItem = ({ item, toggleItemInfoHandler, toggleBuyWizardHandler }: ListItemProps) => (
  <ItemContainer
    key={item.id}
    onClick={() => toggleItemInfoHandler(item)}
  >
    <ItemImageContainer>
      <ItemImage src={item.image_url} />
    </ItemImageContainer>
    <ItemText>{item.title}</ItemText>
  </ItemContainer>
)

export default ListItem
