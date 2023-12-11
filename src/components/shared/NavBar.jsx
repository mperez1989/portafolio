import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const NavBar = () => {

  const [theme, setTheme] = useState(()=> {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark"
    }
    return "light"
  });

  useEffect(()=>{
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark")
    } else {
      document.querySelector("html").classList.remove("dark")
    }
  },[theme])
  const handleChameTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")

  }
  
  return (
    <nav className="nav dark:bg-neutral-900">
        <ul className="nav__container">
            <li className="nav__items "><Link to='/'>Inicio</Link></li>
            <li className="nav__items"><Link to='/habilities'>Habilidades</Link></li>
            <li className="nav__items"><Link to='/projects'>Proyectos</Link></li>
            <li className="nav__items"><Link to='/contact'>Contacto</Link></li>
        </ul>
        <div className="btn_mode">
          <button onClick={handleChameTheme} className="btn_change dark:text-white dark:bg-slate-300"> Change Theme</button>
        </div>
        <div className='logo'>
        <Link to='https://api.whatsapp.com/send?phone=51997413997' target="_blank">
          <ion-icon  name="logo-whatsapp"></ion-icon>
        </Link>
      </div>
      <div className="icon_container">
        <div className="icon">
          <Link to='https://www.linkedin.com/in/marco-perez-055b06293/' target="_balnk">
            <ion-icon name="logo-linkedin"></ion-icon>
          </Link>
        </div>
        <div className="icon">
          <Link to='https://github.com/mperez1989?tab=repositories' target="_blank">
            <ion-icon name="logo-github"></ion-icon>
          </Link>
        </div>
        <div className="icon">
          <Link to='mailto:mperezv490@gmail.com' target="_blank">
            <ion-icon name="mail-outline"></ion-icon>
          </Link>
        </div>
      </div>
      
    </nav>
  )
}

export default NavBar