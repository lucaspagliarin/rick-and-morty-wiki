/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { CardLine, CardContainer } from "./style";


import InfoIcon from '../../../assets/Info.svg'
import PlayIcon from '../../../assets/Play.svg'
import { useCallback, useEffect, useState } from "react";
import axios from "axios";


export function EpisodeCard({ episode }){
  const [ep, setEp] = useState(null);

  const getEpisode = useCallback(async () => {
    await axios
      .get(episode)
      .then((response) => {
        setEp(response.data)
      })
  }, [episode])

  useEffect(() => {
    getEpisode()
  }, [getEpisode])

  return(
    <CardContainer>
      {ep && (
        <>
        <CardLine>
          <img src={PlayIcon}/>
          <p>{ep.episode} | {ep.name}</p>
        </CardLine>
  
        <Link to={"/episode/" + ep.id}>
          <img src={InfoIcon} height={14}/>
          <p>Saiba Mais</p>
        </Link>
        </>
      )}
    </CardContainer>
  )
}