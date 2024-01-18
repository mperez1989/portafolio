import { Link } from "react-router-dom"
import '../style/home.css';

const HomePage = () => {
  return (
    <div className="home__container dark:bg-neutral-900">
      <div>
        <img className="image" src="/marco_perez.jpeg" alt="" />
      </div>
      <h1>Hola, soy <span className="name">MARCO PEREZ</span></h1>
      
      <div className="home__presentation__container">
          <p className="home__presentation">Soy un Frontend Developer Junior apasionado por crear experiencias web cautivadoras. Tengo habilidades sólidas en HTML, CSS, JavaScript, React.js y con conocimiento en Node.js, y me esfuerzo por mantenerme al tanto de las últimas tendencias y mejores prácticas en desarrollo web. estoy emocionado de contribuir con mi creatividad y aprendizaje constante para impulsar proyectos innovadores.  </p>
      </div>
      
      
      <button className="home__curriculum"><Link to='https://drive.google.com/file/d/1tUMMlczqOup0gtbGveBqhT6_2L6hgAwp/view?usp=sharing' target="_blank">CV</Link></button>
     
      
    </div>
  )
}

export default HomePage