import React, { useState } from 'react'
import { useSelector } from "react-redux"
import {
  AppContainer,
  Heading,
  SearchAndItemsArea,
  SearchBar,
  SearchBarContainer,
  MarketObjectsContainer
} from './elements'
import {BuyNowButton} from '../elements'
import {
  selectAvailableItems,
  selectSelectedItems,
} from "./itemsSlice"
import ListItem from '../ListItem'
import ItemModal from '../ItemModal'
import BuyWizardModal from '../BuyWizardModal'
import PreviewOrderModal from '../PreviewOrderModal'

function MarketList() {
  const availableItems = useSelector(selectAvailableItems)
  const selectedItems = useSelector(selectSelectedItems)
  const [items, setItems] = useState(availableItems)
  const [text, setText] = useState('')
  const [isModalVisible, setIsItemModalVisible] = useState(false)
  const [maximisedItem, setMaximisedItem] = useState('')
  const [isBuyWizardModalVisible, setIsBuyWizardModalVisible] = useState(false)
  const [isPreviewOrderModalVisible, setIsPreviewOrderModalVisible] = useState(false)
  const cartIsFilled = selectedItems.length > 0

  const inputHandler = (e) => {
    const value = e.target.value
    setText(value)
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    )
    setItems(filteredItems)
    if (e.target.value === '') {
      setItems(availableItems)
    }
  }
  const togglePreviewOrderModalVisible = () =>  setIsPreviewOrderModalVisible(!isPreviewOrderModalVisible)
  const toggleItemInfoHandler = (item) => {
    setMaximisedItem(item)
    setIsItemModalVisible(!isModalVisible)
  }
   const toggleBuyWizardHandler = () => {
    setIsBuyWizardModalVisible(!isBuyWizardModalVisible)
  }
  console.log('isPreviewOrderModalVisible', isPreviewOrderModalVisible)
  return (
    <AppContainer>
      {isModalVisible && (
        <ItemModal
          item={maximisedItem}
          setIsModalVisible={setIsItemModalVisible}
          toggleBuyWizardHandler={toggleBuyWizardHandler}
          ></ItemModal>
      )}
       {isBuyWizardModalVisible && (
        <BuyWizardModal
          toggleBuyWizardHandler={toggleBuyWizardHandler}
          setIsItemModalVisible={setIsItemModalVisible}
          setIsPreviewOrderModalVisible={setIsPreviewOrderModalVisible}
        ></BuyWizardModal>
      )}
      {isPreviewOrderModalVisible &&
        <PreviewOrderModal 
          setIsPreviewOrderModalVisible={setIsPreviewOrderModalVisible} 
          toggleBuyWizardHandler={toggleBuyWizardHandler}
        />
      }
      <Heading>MARKET PLACE</Heading>
      <SearchAndItemsArea>
        <SearchBarContainer>
          <SearchBar
            placeholder="What would you like to buy?"
            onKeyUp={(e) => inputHandler(e)}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </SearchBarContainer>
        <MarketObjectsContainer>
          {items.map((item) => (
            <ListItem
              key={item.id}
              item={item}
              toggleItemInfoHandler={toggleItemInfoHandler}
              toggleBuyWizardHandler={toggleBuyWizardHandler}
            ></ListItem>
          ))}
        </MarketObjectsContainer>
      </SearchAndItemsArea>
      {cartIsFilled && 
      <BuyNowButton onClick={() => setIsPreviewOrderModalVisible(true)}>
        Checkout
      </BuyNowButton>}
    </AppContainer>
  )
}

export default MarketList
