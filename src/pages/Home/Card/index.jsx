/* eslint-disable react/prop-types */


import AlienIcon from '../../../assets/Alien.svg'
import PlanetIcon from '../../../assets/Planet.svg'
import PulseIcon from '../../../assets/Pulse.svg'
import InfoIcon from '../../../assets/Info.svg'
import { CardLine, CardInfo, CardContainer, CardButton } from './style'
import { Link } from 'react-router-dom'


export function Card({ character }) {
  return (
    <CardContainer>
      <img src={character.image} width={250}/>
      <div>
        <h4>{character.name}</h4>
        <CardInfo>
          <CardLine>
            <img src={PulseIcon} height={14}/>
            <p>{character.status}</p>
          </CardLine>
          <CardLine>
            <img src={AlienIcon} height={14}/>
            <p>{character.species}</p>
          </CardLine>
          <CardLine>
            <img src={PlanetIcon} height={14}/>
            <p>{character.origin.name}</p>
          </CardLine>
        </CardInfo>
        <CardButton>
          <Link to={"/character/"+character.id}>
          <img src={InfoIcon} height={14}/>
          <p>Saiba Mais</p>
          </Link>
        </CardButton>
      </div>
    </CardContainer>
  )
}