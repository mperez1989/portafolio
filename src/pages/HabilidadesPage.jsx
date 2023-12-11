


const HabilidadesPage = () => {
  return (
    <div className=" habilities__main dark:bg-neutral-900">
      <h1 className="habilities">Habilidades Técnicas</h1>
      <div className="habilities__container">
        <div className="icon_items uno" >
          <h3>HTML 5</h3>
          <ion-icon name="logo-html5"></ion-icon>
        </div>
        <div className="icon_items dos">
          <h3>CSS 3</h3>
          <ion-icon name="logo-css3"></ion-icon>
        </div>
        <div className="icon_items tres">
          <h3>JavaScript</h3>
          <ion-icon name="logo-javascript"></ion-icon>
        </div>
        <div className="icon_items cuatro">
          <h3>React.js</h3>
          <ion-icon name="logo-react"></ion-icon>
        </div>
        <div className="icon_items cinco">
          <h3>Node.js</h3>
          <ion-icon name="logo-nodejs"></ion-icon>
        </div>
      </div>
      <h2 className="habilities">Habilidades Blandas</h2>
      <div className="habilities__blandas__container">
        <div className="habilities__blandas__items" >
          <h3>Proactividad Laboral. /</h3>
        </div>
        <div className="habilities__blandas__items">
          <h3>Trabajo en Equipo. /</h3>
        </div>
        <div className="habilities__blandas__items">
          <h3>Habilidad de Comunicación. /</h3>
        </div>
        <div className="habilities__blandas__items">
          <h3>Liderazgo /</h3>
        </div>
        <div className="habilities__blandas__items">
          <h3>Resolución de Problemas. /</h3>
        </div>
        <div className="habilities__blandas__items">
          <h3>Toma de Decisiones. /</h3>
        </div>
        <div className="habilities__blandas__items">
          <h3>Flexibilidad.</h3>
        </div>
        
      </div>
    </div>
  )
}

export default HabilidadesPage