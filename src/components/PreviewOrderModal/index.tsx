import React from 'react'
import { useSelector } from "react-redux"

import {ItemContainer, Image, Info, } from './elements'

import {
  ModalContainer,
  ModalWindow,
  BuyNowButton
} from '../elements'
import {
  selectAvailableItems,
  selectSelectedItems
} from "../MarketList/itemsSlice"

function PreviewOrderModal ({setIsPreviewOrderModalVisible, toggleBuyWizardHandler}){ 
  const selectedItemIds = useSelector(selectSelectedItems)
  const availableItems = useSelector(selectAvailableItems)

  const selectedItems = availableItems.filter(item=>selectedItemIds.includes(item.id))
  let total = 0

  selectedItems.forEach(item=> total+=Number(item.price.split('€')[0])||0)
  
  return (
    <ModalContainer 
    onClick={() => setIsPreviewOrderModalVisible(false)}
    >
      <ModalWindow onClick={(e) => e.stopPropagation()}>
        <h2>Selected Items</h2>
        {selectedItems.map(item=> {
        return (<ItemContainer>
          <Image src={item.image_url}/>
          <Info>{item.title}, {item.price}</Info>
        </ItemContainer>)}
        )}
        <h3>
          Sum: {total}
        </h3> 
        <BuyNowButton onClick={toggleBuyWizardHandler}>Buy Now!</BuyNowButton>
      </ModalWindow> 
    </ModalContainer>
)}

export default PreviewOrderModal
