import css from './Contact.module.css'

function Contact({ data: {name, number } }) {

  return (
    <>
      <div className="container">
        <div className="wrap">
          <p className="name">{name}</p>
          <p className='number'>{number}</p>
        </div>
        <button className='onDelete'>Delete</button>
      </div>
    </>
  )
}

export default Contact