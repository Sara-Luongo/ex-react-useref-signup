import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [specializzazione, setSpecializzazione] = useState('');
  const [yearOfExperience, setYearOfExperience] = useState(0);
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      fullName.trim() === '' ||
      userName.trim() === '' ||
      description.trim() === ''
    ) {
      console.log('il nome,username o descrizione non può essere vuoto')
      return;
    }
  }

  return (
    <>
      <div>
        <form onSubmit={ }>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            type="text" />
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text" />
          <select
            value={specializzazione}
            onChange={(e) => setSpecializzazione(e.target.value)} >
            <option value="">Scegli la specializzazione</option>
            <option value="full-stack">Full Stack</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
          </select>
          <input
            value={yearOfExperience}
            onChange={(e) => setYearOfExperience(e.target.value)}
            type="number" />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)} ></textarea>
          <button type='submit'>Invia</button>
        </form>
      </div>
    </>
  )
}

export default App
