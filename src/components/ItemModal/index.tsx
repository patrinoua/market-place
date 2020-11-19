import React from 'react'
import {
  ModalContainer,
  ModalWindow,
  ModalImageContainer,
  ModalImage,
  ModalTitle,
  ModalDescription,
  BuyNowButton
} from './elements'

const ItemModal = ({ item, setIsModalVisible, toggleBuyWizardHandler }) => (
  <ModalContainer onClick={() => setIsModalVisible(false)}>
    <ModalWindow onClick={(e) => e.stopPropagation()}>
      <ModalImageContainer>
        <ModalImage src={item.image_url} />
      </ModalImageContainer>
      <ModalTitle>
        {item.title}, {item.price}
      </ModalTitle>
      <ModalDescription>{item.description}</ModalDescription>
      <BuyNowButton
        onClick={toggleBuyWizardHandler}
        toggleBuyWizardHandler={toggleBuyWizardHandler}
      >Buy Now!</BuyNowButton>
    </ModalWindow>
  </ModalContainer>
)

export default ItemModal
