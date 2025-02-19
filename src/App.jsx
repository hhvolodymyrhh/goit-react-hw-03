import { useState } from 'react'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm.jsx'
import ContactList from './components/ContactList/ContactList.jsx'
import SearchBox from './components/SearchBox/SearchBox.jsx'



function App() {
  const [list, setList] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const addTask = (newTask)=>{}

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addTask} />
      <SearchBox />
      <ContactList tasks={list} />
    </div>
  )
}

export default App
