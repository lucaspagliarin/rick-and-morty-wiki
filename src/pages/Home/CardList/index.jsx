/* eslint-disable react/prop-types */
import { Card } from "../Card";
import { CardListContainer } from "./style";

export function CardList(props) {
  
  const { characters } = props;
  return(
    <CardListContainer>
      {characters.map((character) => (<Card key={character.id} character={character}/>))}
    </CardListContainer>
  )
}
