import { useState } from 'react'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm.jsx'
import ContactList from './components/ContactList/ContactList.jsx'
import SearchBox from './components/SearchBox/SearchBox.jsx'



function App() {
  const [lists, setList] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const addTask = (newTask) => {
    setList((prevTask) => {
      return [...prevTask, newTask]
    })
  }

  const deleteTask = (taskId) => { 
    setList((prevTask) => {
      return prevTask.filter((task) => task.id !== taskId);
    })
  }

  const [filter, setFilter] = useState('');

  const visibleTask = lists.filter(list => 
  list.name.toLowerCase().includes(filter.toLowerCase()) || 
  list.number.includes(filter)
);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addTask} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList tasks={visibleTask} onDelete={deleteTask} />
    </div>
  )
}

export default App
