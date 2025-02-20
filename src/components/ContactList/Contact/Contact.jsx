import css from './Contact.module.css';
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";

function Contact({ data: {name, number, id}, onDelete }) {

  return (
      <div className={css.container}>
        <div className={css.wrap}>
        <div className={css.iconwrap}><BsFillPersonFill /><p className={css.name}>{name}</p></div>
          <div className={css.iconwrap}><BsFillTelephoneFill /><p className={css.number}>{number}</p></div>
        </div>
        <button className={css.onDelete} onClick={()=>{onDelete(id)}}>Delete</button>
      </div>
  )
}

export default Contact