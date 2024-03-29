
import { useNavigate } from 'react-router-dom'
import './style/HeaderPokedex.css'

const HeaderPokedex = () => {

  const navigate = useNavigate()

  const handlePokedex = () => {
    navigate('/')
  }

  return (
    <header className="header__content">
        <img onClick={handlePokedex} className="header__img" src="./pokedex.png" alt="" />
        <div className="header__red">
        </div>
        <div className="header__black">
          <div className="header__circle__white">
            <div className="header__circle__black"></div>
          </div>
        </div>
      </header>
  )
}

export default HeaderPokedex
