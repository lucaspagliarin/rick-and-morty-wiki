import styled from "styled-components";

import PesquisarIcon from '../../assets/MagnifyingGlass.svg'

export const HomePage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 60px;
`

export const HomeContainer = styled.div`
  max-width: 1220px;
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`

export const FilterContainer = styled.div`
  width: 1080px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #1a1a1a;
  width: 405px;
  border-radius: 32px;


  input {
    color: #fff;
    background-color: #1a1a1a;
    padding: 0 24px 0 24px;
    border: 1px solid #1a1a1a;
    width: 100%;
    height: 32px;
    outline: none;
    border-radius: 24px;
    background: url(${PesquisarIcon}) no-repeat right;
    background-size: 24px;
    background-position: 370px;

    &:focus {
      border: 1px solid #BFDE42;
    }
  }
`

export const ActionsContainer = styled.div`
  width: 1080px;
  max-width: 1220px;
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  gap: 8rem;

  font-size: 14px;
  font-weight: 400;

  color: #cccccc;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }


  button {
    padding: 8px 16px;
    background-color: #1e1e20;
    color: #ffffff;
    border-radius: 12px;
    border: 1px solid #BFDE42;

    &:hover {
      background-color: #BFDE42;
    }
  }
`