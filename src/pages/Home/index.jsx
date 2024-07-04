import { HomeContainer, HomePage, FilterContainer, SearchContainer, ActionsContainer } from "./style";


import { Header } from "../../components/Header";
import { CardList } from "./CardList";
import { useState, useCallback, useEffect } from "react";
import { api } from "../../api/api";

export function Home() {
  const [info, setInfo] = useState(null)
  const [page, setPage] = useState(1)
  const [species, setSpecies] = useState('')
  const [name, setName] = useState('')
  const [characters, setCharacters] = useState([])

  const getAllCharacters = useCallback(async () => {
    await api
      .get('character/', {
        params: {
          page,
          species,
          name,
        },
      })
      .then((response) => {
        setCharacters(response.data.results)
        setInfo(response.data.info)
      })
  }, [page, species, name, setInfo])

  useEffect(() => {
    getAllCharacters()
  }, [getAllCharacters])

  function handleNextPage(){
    setPage(page + 1);
  }

  function handlePreviousPage(){
    setPage(page - 1);
  }

  function handleFirstPage(){
    setPage(1);
  }

  function handleLastPage(){
    setPage(info.pages);
  }

  function handleNameChange(e) {
    setName(e.target.value)
    handleFirstPage()
  }

  function handleSpeciesChange(e) {
    setSpecies(e.target.value)
    handleFirstPage()
  }

  return(
    <>
      <Header />
      <HomePage>
      <HomeContainer>
        <FilterContainer>
          <SearchContainer>
            <input type="text" placeholder="Nome do personagem" value={name} onChange={handleNameChange}/>
          </SearchContainer>
          <SearchContainer>
            <input type="text" placeholder="Espécie" value={species} onChange={handleSpeciesChange}/>
          </SearchContainer>
          
        </FilterContainer>
        <ActionsContainer>
          {info && (<p>Vendo página {page} de {info.pages} - Total de Registros: {info.count}</p>)}
          <div>
            <button onClick={handleFirstPage}>Primeira</button>
            <button onClick={handlePreviousPage}>Anterior</button>
            <button onClick={handleNextPage}>Proxima</button>
            <button onClick={handleLastPage}>Última</button>
          </div>
        </ActionsContainer>

        <CardList characters={characters}/>
        <ActionsContainer>
          {info && (<p>Vendo página {page} de {info.pages} - Total de Registros: {info.count}</p>)}
          <div>
            <button onClick={handleFirstPage}>Primeira</button>
            <button onClick={handlePreviousPage}>Anterior</button>
            <button onClick={handleNextPage}>Proxima</button>
            <button onClick={handleLastPage}>Última</button>
          </div>
        </ActionsContainer>
      </HomeContainer>
    </HomePage>
    </>
    
  )
}