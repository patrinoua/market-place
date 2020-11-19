import React, {useState} from 'react'
import {
  BuyWizardModalContainer,
  ModalWindow,
  ConfirmButton,
  SubtleButton
} from './elements'
import {TextField} from '@material-ui/core';

const BuyWizardModal = ({ setIsItemModalVisible,toggleBuyWizardHandler, setIsPreviewOrderModalVisible }) => {
  
  const [name, setName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [creditCard, setCreditCard] = useState('')

  const submitInfo = () => {
    console.log('post to api with the information', name, lastname, email, creditCard)
    alert('Thank you for your order!')
    setTimeout(()=>{
      setIsItemModalVisible(false)
      toggleBuyWizardHandler()
      setIsPreviewOrderModalVisible(false)
    }, 500)
  }
  const onCancel = ()=>{
    setIsItemModalVisible(false)
    toggleBuyWizardHandler()
    setIsPreviewOrderModalVisible(false)
  }
  return (
  <BuyWizardModalContainer>
    <ModalWindow onClick={(e) => e.stopPropagation()}>
    <h1>Order Details</h1>
     <form style={{display:'flex', flexDirection:'column'}} noValidate autoComplete="off">
      <TextField 
        style={{marginBottom: '10px', width: '250px'}} 
        label="Name" 
        value={name} 
        onChange={(e)=>setName(e.target.value)}
      />
      <TextField 
        style={{marginBottom: '10px'}} 
        label="Last Name" 
        value={lastname} 
        onChange={(e)=>setLastName(e.target.value)}
      />
      <TextField 
        style={{marginBottom: '10px'}} 
        label="Email" 
        type="email"
        value={email} 
        onChange={(e)=>setEmail(e.target.value)}
      />
      <TextField 
        style={{marginBottom: '50px'}} 
        label="Credit Card" 
        value={creditCard} 
        onChange={(e)=>setCreditCard(e.target.value)}
      />
    </form>
    <ConfirmButton onClick={submitInfo}>
      Confirm
     </ConfirmButton>
     <SubtleButton onClick={onCancel}>Cancel</SubtleButton> 
    </ModalWindow>
  </BuyWizardModalContainer>

)}

export default BuyWizardModal
