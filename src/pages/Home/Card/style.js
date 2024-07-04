import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #313234;
  border-radius: 8px;
  padding: 1rem;
  max-width: 250px;

  img {
    border-radius: 16px;
  }

  h4 {
    word-wrap: break-word;
    white-space: normal;
  }

`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`


export const CardLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
`

export const CardButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 2rem;

  a {
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    border-radius: 32px;
    cursor: pointer;

    &:hover {
      background-color: #BFDE42;
    }

  }

  
`