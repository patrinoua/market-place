import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import {
  AppContainer,
  Heading,
  SearchAndItemsArea,
  SearchBar,
  SearchBarContainer,
  MarketObjectsContainer
} from './elements'
import {
  selectItems,
  // selectId,
} from "./itemsSlice"
import ListItem from '../ListItem'
import ItemModal from '../ItemModal'
import BuyWizardModal from '../BuyWizardModal'

function MarketList() {
  const availableItems = useSelector(selectItems)
  const [items, setItems] = useState(availableItems)
  const [text, setText] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [maximisedItem, setMaximisedItem] = useState('')
  const [isBuyWizardModalVisible, setIsBuyWizardModalVisible] = useState(false)

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

  const toggleItemInfoHandler = (item) => {
    setMaximisedItem(item)
    setIsModalVisible(!isModalVisible)
  }
   const toggleBuyWizardHandler = () => {
    setIsBuyWizardModalVisible(!isBuyWizardModalVisible)
  }
  return (
    <AppContainer>
      {isModalVisible && (
        <ItemModal
          item={maximisedItem}
          setIsModalVisible={setIsModalVisible}
          toggleBuyWizardHandler={toggleBuyWizardHandler}
          ></ItemModal>
      )}
       {isBuyWizardModalVisible && (
        <BuyWizardModal
          toggleItemInfoHandler={toggleItemInfoHandler}
          toggleBuyWizardHandler={toggleBuyWizardHandler}
        ></BuyWizardModal>
      )}
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
    </AppContainer>
  )
}

export default MarketList
