import css from './ContactList.module.css';
import Contact from './Contact/Contact.jsx';


function ContactList({tasks}) {
console.log(tasks)
  return (
    
    <ul className='ulList'>
      {tasks.map((task) => (
        <li className={css.item} key={task.id}><Contact data={task}/></li>   
      ))}
    </ul>
    
  );
}

export default ContactList