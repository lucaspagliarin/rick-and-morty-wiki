import styled from "styled-components"

export const CardLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
`

export const CardContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap:8px;

  padding: 1rem;
  border-radius: 16px;

  background-color: #F9F9F9;

  a {
    display: flex;
    align-items: center;
    gap: 8px;

    text-decoration: none;

    padding: 8px 16px;
    border-radius: 24px;

    &:hover {
      background-color: #BFDE42;
      color: #F9F9F9;
    }

    color: #11b0c8;
  }

  svg path{
    fill: currentcolor;
  }
`
