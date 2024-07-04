import { Link, useParams } from "react-router-dom";

import { 
  CharacterWrapper, 
  LinkContainer, 
  CharacterCardContainer, 
  CharacterInfos, 
  EpisodesContainer, 
  EpisodesList, 
} from "./style";

import { HeaderSimplified } from '../../components/HeaderSimplified'
import { EpisodeCard } from "./EpisodeCard"
import { useCallback, useEffect, useState } from "react";
import { api } from "../../api/api";

export function Character(){
  const { charId } = useParams();
  const [character, setCharacter] = useState(null);

  const getCharacter = useCallback(async () => {
    await api
      .get('character/' + charId)
      .then((response) => {
        setCharacter(response.data)
        console.log(response.data)
      })
  }, [charId])

  useEffect(() => {
    getCharacter()
  }, [getCharacter])

  return (
    <>
        <HeaderSimplified />
        <CharacterWrapper>
          <LinkContainer>
            <Link to="/">Go Back</Link>
          </LinkContainer>


          {character && (
            <>
              <CharacterCardContainer>
                <div>
                  <img src={character.image}/>
                </div>
                <CharacterInfos>
                  <h1>{character.name}</h1>
        
                  <div>
                    {character.status && (<p><span>Status:</span> {character.status}</p>)}
                    {character.species && (<p><span>Espécie:</span> {character.species}</p>)}
                    {character.type && (<p><span>Tipo:</span> {character.type}</p>)}
                    
                    <p><span>Genero:</span> {character.gender}</p>
                    <p><span>Origem:</span> {character.origin.name}</p>
                    <p><span>Localização:</span> {character.location.name}</p>
                  </div>
                </CharacterInfos>
              </CharacterCardContainer>
      
              <EpisodesContainer>
                <h3>Episódios</h3>
        
                <EpisodesList>
                  {character.episode.map((ep) => (
                    <EpisodeCard episode={ep} key={ep}/>
                  ))}
                </EpisodesList>
        
              </EpisodesContainer>
            </>
          )}

      </CharacterWrapper>
    </>
  )
}