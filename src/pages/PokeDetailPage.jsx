import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import HeaderPokedex from "../components/shared/HeaderPokedex"
import './styles/PokeDetailPage.css'

const PokeDetailPage = () => {

  const { name } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`
  const [ pokemon, getPokemon ] = useFetch(url)

  useEffect(() => {
    getPokemon()
  }, [name])


console.log(pokemon)

  return (
    <main>
      <HeaderPokedex />
      <div className="detail">
        <div className="detail__content">
          <div className={`detail__bg bg-${pokemon?.types[0].type.name}`}>
            <img className="detail__img" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
          </div>
          <div className="detail__prop">
            <h2 className={`detail__id color-${pokemon?.types[0].type.name}`}>#{pokemon?.id}</h2>
            <div className="detail__lineName">
              <div className='detail__line'>&nbsp;</div>
              <h2 className={`detail__name color-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h2>
              <div className='detail__line'>&nbsp;</div>
            </div>
            <div className="detail__dimensions">
              <ul className="list">
                <li><span className="list__label">Weight</span></li>
                <li><span className="list__value">{pokemon?.weight}</span></li>
              </ul>
              <ul className="list">
                <li><span className="list__label">Height</span></li>
                <li><span className="list__value">{pokemon?.height}</span></li>
              </ul>
            </div>
            <div className="detail__tyAndAbi">
              <div >
                <h3 className="detail__title">Type</h3>
                <ul className="detail__types">
                  {
                    pokemon?.types.map(typeInfo => (
                    <li className={`detail__value general bgc-${typeInfo.type.name}`} key={typeInfo.type.url}>{typeInfo.type.name}</li>
                    ))
                  }
                </ul>
              </div>
              <div >
                <h3 className="detail__title">Abilities</h3>
                <ul className="detail__types">
                  {
                    pokemon?.abilities.map(abilitiesInfo => (
                    <li className='detail__value' key={abilitiesInfo.ability.url}>{abilitiesInfo.ability.name}</li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
          <div className="stats">
            <div className="stats__titles">
              <h2 className="stats__title">Stats</h2>
              <div className='detail__line stats__line'>&nbsp;</div>
              <img className="stats__img" src="./pokeball.svg" alt="" />
            </div>
            <div className="container__stats">
            <div className="skill">
              <div className="still__titles">
                <h2>HP</h2><h2>{pokemon?.stats[0].base_stat}/150</h2>
              </div>
                <progress className="stats__progress" max={150} value={pokemon?.stats[0].base_stat}></progress>
              </div><div className="skill">
              <div className="still__titles">
                <h2>Attack</h2><h2>{pokemon?.stats[1].base_stat}/150</h2>
              </div>
                <progress className="stats__progress" max={150} value={pokemon?.stats[1].base_stat}></progress>
              </div><div className="skill">
                <div className="still__titles">
                  <h2>Defense</h2><h2>{pokemon?.stats[2].base_stat}/150</h2>
                </div>
                <progress className="stats__progress" max={150} value={pokemon?.stats[2].base_stat}></progress>
              </div><div className="skill">
                <div className="still__titles">
                  <h2>Speed</h2><h2>{pokemon?.stats[3].base_stat}/150</h2>
                </div>
                <progress className="stats__progress" max={150} value={pokemon?.stats[3].base_stat}></progress>
              </div>
            </div>
          </div>
        </div>
        <div className="detail__movements">
            <div className="movements__titles">
              <h2 className="stats__title">Movements</h2>
              <div className='detail__line stats__line'>&nbsp;</div>
              <img className="stats__img" src="./pokeball.svg" alt="" />
            </div>
            <ul className="movements">
              {
                pokemon?.moves.map(movesInfo => (
                <li className='detail__move' key={movesInfo.move.url}>{movesInfo.move.name}</li>
                ))
              }
            </ul>
        </div>
      </div>
    </main>
  )
}

export default PokeDetailPage
