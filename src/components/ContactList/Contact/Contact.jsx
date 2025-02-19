import css from './Contact.module.css'

function Contact({ data: {name, number, id}, onDelete }) {

  return (
      <div className={css.container}>
        <div className={css.wrap}>
          <p className={css.name}>{name}</p>
          <p className={css.number}>{number}</p>
        </div>
        <button className={css.onDelete} onClick={()=>{onDelete(id)}}>Delete</button>
      </div>
  )
}

export default Contact