import css from './ContactList.module.css';
import Contact from './Contact/Contact.jsx';


function ContactList({tasks, onDelete}) {
// console.log(tasks)
  return (
    
    <ul className={css.ulList}>
      {tasks.map((task) => (
        <li className={css.item} key={task.id}><Contact data={task} onDelete={onDelete} /></li>   
      ))}
    </ul>
    
  );
}

export default ContactList