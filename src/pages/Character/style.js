import styled from "styled-components";


export const CharacterWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`



export const CharacterInfos = styled.div`
  background-color: #BFDE42;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 32px;
  border-radius: 32px;

  color: #4D4D4D;

  max-width: 316px;

  h1 {
    line-break: auto;
    margin: 0;
  }

  span {
    color: #11B0C8;
    font-weight: 700;
  }
`

export const LinkContainer = styled.div`
  width: 1140px; 
  padding: 24px;

  a {
    color: #BFDE42;
    text-decoration: none;
  }
`

export const EpisodesContainer = styled.div`
    width: 908px;
    margin-bottom: 80px;
    color: #11B0C8;
`

export const EpisodesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  gap: 1rem;
  width: auto;
`

export const CharacterCardContainer = styled.div`
  width: auto;
  max-width: 1140px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;

  background-color: #313234;
  padding: 48px;
  border-radius: 40px;

  img {
    width: 400px;
    border-radius: 32px;
  }
`