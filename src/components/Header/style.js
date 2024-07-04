import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background-color: #000000;
  width: 100%;
  min-height: 380px;

  padding: 20px 140px 0px;
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
`


export const HeaderCopy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 8rem;


  color: #BFDE42;

  span {
    color: #11b0c8;
  }
`

export const Logo = styled.img`
  width: 220px;
`