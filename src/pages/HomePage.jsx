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
          <p className="home__presentation">Como Desarrollador FULL STACK junior, domino las tecnologías esenciales en , FRONTEND y BACKEND, incluyendo HTML, CSS, JavaScript, React.js y Node.js. Mi enfoque versátil me permite contribuir en todas las fases del desarrollo, desde la creación de interfaces atractivas hasta la implementación de funcionalidades robustas en el backend. Con una sólida base técnica y una actitud proactiva, estoy listo para aprender y crecer en cualquier proyecto que se me presente.</p>
      </div>
      
      
      <button className="home__curriculum"><Link to='https://drive.google.com/file/d/1uYo5BDHp1fj66-Ld9tOS2GJt031EHevA/view?usp=sharing' target="_blank">Curriculum</Link></button>
     
      
    </div>
  )
}

export default HomePage