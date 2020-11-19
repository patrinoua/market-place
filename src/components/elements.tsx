import styled from 'styled-components'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  position: absolute;
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  @media (max-width: 550px) {
    overflow: hidden;
  }
`
export const ModalWindow = styled.div`
  max-width: 800px;
  max-height: 800px;
  width: 70vw;
  height: 80vw;
  background: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  @media (max-width: 550px) {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
  }
`;
export const ModalImageContainer = styled.div`
  width: 90%;
  height: 60%;
  margin-top: 30px;
  margin-bottom: 20px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 550px) {
    margin-top: 20px;
    margin-bottom: 10px;
  }
`
export const ModalImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
`
export const ModalTitle = styled.div`
  font-weight: 600;
`
export const ModalDescription = styled.div`
  margin-bottom: 10px;
`
export const BuyNowButton = styled.div`
  width: 300px;
  height: 60px;
  color: white;
  background-color: #ce5959;
  border-radius: 30px;
  border: 0;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #e07171;
    cursor: pointer;
  }
  @media (max-width: 550px) {
    height: 40px;
      width: 200px;

  }
`
