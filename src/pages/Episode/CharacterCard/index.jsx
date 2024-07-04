/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { CardLine, CardContainer, CardLineInfo } from "./style";


import InfoIcon from '../../../assets/Info.svg'
import { useCallback, useEffect, useState } from "react";
import axios from "axios";


export function CharacterCard({ character }){
  const [char, setChar] = useState(null);

  const getCharacter = useCallback(async () => {
    await axios
      .get(character)
      .then((response) => {
        setChar(response.data)
      })
  }, [character])

  useEffect(() => {
    getCharacter()
  }, [getCharacter])

  return(
    <CardContainer>
      {char && (
        <>
        <CardLine>
          <img src={char.image}/>
          <CardLineInfo>
            <h4>{char.name}</h4>
            <Link to={"/character/" + char.id}>
              <img src={InfoIcon} height={14}/>
              <p>Saiba Mais</p>
            </Link>
          </CardLineInfo>
        </CardLine>
  
        
        </>
      )}
    </CardContainer>
  )
}