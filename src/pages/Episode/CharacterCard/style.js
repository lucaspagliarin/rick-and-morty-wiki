import styled from "styled-components"

export const CardLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`

export const CardLineInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;

    text-decoration: none;
    border-radius: 24px;

    &:hover {
      background-color: #BFDE42;
      color: #F9F9F9;
    }

    img {
      width: 14px;
    }

    color: #11b0c8;
  }
  
`

export const CardContainer = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  gap:8px;

  padding: 1rem;
  border-radius: 16px;

  background-color: #F9F9F9;

  h4 {
    margin: 0;
  }

  img {
    width: 64px;
    border-radius: 9999px;
  }
`
