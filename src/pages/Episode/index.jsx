import { Link, useParams } from "react-router-dom";

import { 
  EpisodeWrapper, 
  LinkContainer, 
  EpisodeCardContainer, 
  EpisodeInfos, 
  CharacterContainer, 
  CharacterList, 
} from "./style";

import { HeaderSimplified } from '../../components/HeaderSimplified'
import { CharacterCard } from "./CharacterCard"
import { useCallback, useEffect, useState } from "react";
import { api } from "../../api/api";

export function Episode(){
  const { episodeId } = useParams();
  const [episode, setEpisode] = useState(null);

  const getEpisode = useCallback(async () => {
    await api
      .get('episode/' + episodeId)
      .then((response) => {
        setEpisode(response.data)
        console.log(response.data)
      })
  }, [episodeId])

  useEffect(() => {
    getEpisode()
  }, [getEpisode])

  return (
    <>
        <HeaderSimplified />
        <EpisodeWrapper>
          <LinkContainer>
            <Link to="/">Go Back</Link>
          </LinkContainer>


          {episode && (
            <>
              <EpisodeCardContainer>
                <EpisodeInfos>
                  <h1>{episode.episode} | {episode.name}</h1>
                  <h4><span>Air Date:</span> {episode.air_date}</h4>
                </EpisodeInfos>
              </EpisodeCardContainer>
      
              <CharacterContainer>
                <h3>Personagens</h3>
        
                <CharacterList>
                  {episode.characters.map((character) => (
                    <CharacterCard character={character} key={character}/>
                  ))}
                </CharacterList>
        
              </CharacterContainer>
            </>
          )}

      </EpisodeWrapper>
    </>
  )
}