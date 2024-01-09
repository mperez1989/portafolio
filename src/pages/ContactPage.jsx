import '../style/contact.css';
import { Link } from "react-router-dom";



const ContactPage = () => {

    

  return (

    <div className='contact dark:bg-neutral-900'>
     <div className="contact__container ">
        <h1 className="text__title">CONTACTAME !</h1>
        <div className="contact__email contact_items">
            <ion-icon name="mail-outline"></ion-icon>
            <Link className="email" to='mailto:mperezv490@gmail.com' target="_blank">mperezv490@gmail.com</Link>
        </div>
        <div className="contact__linkedin contact_items">
            <ion-icon name="logo-linkedin"></ion-icon>
            <Link className="linkedin" to='https://www.linkedin.com/in/marco-perez-055b06293/' target="_blank">Marco Perez/linkedin</Link>
        </div>
        <div className="contact__whatsapp contact_items">
            <ion-icon  name="logo-whatsapp"></ion-icon>
            <Link className="whatsapp" to='https://api.whatsapp.com/send?phone=558291846948' target="_blank">(+55)82-99184-6948</Link>
        </div>
     </div>
     </div>
    
  )
}

export default ContactPage