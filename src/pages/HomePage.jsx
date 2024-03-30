import FormTrainer from "../components/HomePage/FormTrainer"
import './styles/HomePage.css'

const HomePage = () => {
  return (
    <div className="container">
    <div className="home">
      <img className="home__img" src="./pokedex.png" alt="" />
      <h2 className="home__hi">¡Hi trainer!</h2>
      <p className="home__text">To see the pokemon's information,  tell me your trainer name</p>
      
      <FormTrainer />
    </div>
    <div className="footer__content">
    <div className="footer__red">
    </div>
    <div className="footer__black">
      <div className="circle__white">
        <div className="circle__black"></div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default HomePage
