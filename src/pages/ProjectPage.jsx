import { Link } from 'react-router-dom';
import '../style/project.css';


const Proyectos = () => {

  return (
    <div className='main__container dark:bg-neutral-900'>
      <div className='project1__container projects__container'>
        <img src="/pokemon.jpeg" alt="" />
        <h2 className='main__title'>Pokedex APP</h2>
        <p className='text pokedex'>Poke App es una página mucho más elaborada que permite interactuar por completo con todos los Pokémon existentes y que son consumidos desde la API oficial de Pokémon.
        Es importante destacar el uso de Redux, React Router, useSelect y los hooks habituales useEffect y useState.</p>
        <div className='btn__container'>
          <button className='btn'><Link to='https://pokedex-brcq.onrender.com' target='_blank'>Demo</Link></button>
          <button className='btn'><Link to='https://github.com/mperez1989/pokedexApp' target='_blank'>Github</Link></button>
        </div>
        
      </div>
      <div className='project2__container projects__container'>
        <img src="/crud.png" alt="" />
        <h2 className='main__title'>CRUD APP</h2>
        <p className='text crud'>Users CRUD Control es un CRUD muy sencillo que simula un centro de control de usuarios. Este       permite la visualización de la información consumida desde una API.
        La aplicación fue desarrollada con React, haciendo uso de useForm y también como es costumbre, dos hooks más usados en React, useState y useEffect.</p>
        <div className='btn__container'>
          <button className='btn'><Link to='https://usercardas.onrender.com/' target='_blank'>Demo</Link></button>
          <button className='btn'><Link to='https://github.com/mperez1989/card-users' target='_blank'>Github</Link></button>
        </div>
        
      </div>
      <div className='project3__container projects__container'>
        <img src="/rick.png" alt="" />
        <h2 className='main__title'>Rick and Morty APP</h2>
        <p className='text rick'>Permite explorar los diferentes universos de la serie.
          La app fue construida haciendo uso de Vite con React. Además se hizo uso de hooks, customhooks y componentes para darle estructura y orden. También, es importante decir que las peticiones son realizadas con axios.</p>
        <div className='btn__container'>
          <button className='btn'><Link to='https://entregable.onrender.com' target='_blank'>Demo</Link></button>
          <button className='btn'><Link to='https://github.com/mperez1989/rick-and-morty' target='_blank'>Github</Link></button>
        </div>
        
      </div>
    </div>
  )
}

export default Proyectos