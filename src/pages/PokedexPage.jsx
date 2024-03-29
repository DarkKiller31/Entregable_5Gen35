import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import ListPokemons from "../components/PokedexPage/ListPokemons"
import SelectType from "../components/PokedexPage/SelectType"
import './styles/PokedexPage.css'
import HeaderPokedex from "../components/shared/HeaderPokedex"

const PokedexPage = () => {

  const [pokeSearch, setPokeSearch] = useState('')
  const [typeSelected, setTypeSelected] = useState('allPokemons')

  const inputSearch = useRef()

  const trainer = useSelector(states => states.trainer)

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'
  const [ pokemons, getPokemons, getPokeByType ] = useFetch(url)

  useEffect(() => {
    if(typeSelected === 'allPokemons') {
      getPokemons()
    } else {
      getPokeByType(typeSelected)
    }
  }, [typeSelected])

  const handleSubmit = e => {
    e.preventDefault()
    setPokeSearch(inputSearch.current.value.trim().toLowerCase())
  }

  const pokemonsFiltered = pokemons?.results.filter(poke => {
    return poke.name.includes(pokeSearch)
  })

  return (
    <div>
      <HeaderPokedex />
      <p className="pokedex__text"><span className="pokedex__text__welcome">Welcome {trainer}</span>, here you cand find your favorite pokemon</p>
      <div className="pokedex__container">
        <form className="pokedex__form" onSubmit={handleSubmit}>
          <input className="pokedex__input" ref={inputSearch} type="text" placeholder="Look for a pokemon" />
          <button className="pokedex__search">Search</button>
        </form>
        <SelectType setTypeSelected={setTypeSelected} />
        </div>
      <ListPokemons
        pokemons={pokemonsFiltered}
      />
    </div>
  )
}

export default PokedexPage
