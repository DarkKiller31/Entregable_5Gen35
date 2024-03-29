import PokeCard from "./PokeCard"
import './style/ListPokemons.css'

const ListPokemons = ({ pokemons }) => {
  return (
    <div className="list__card">
      {
        pokemons?.map(pokeInfo => (
          <PokeCard 
            key={pokeInfo.url}
            pokeInfo={pokeInfo}
          />
        ))
      }
    </div>
  )
}

export default ListPokemons
