import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
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

    if (yearOfExperience < 0) {
      console.log('per gli anni di esperienza il numero non può essere negativo')
      return;
    }
    if (specializzazione === 'Scegli la specializzazione') {
      console.log('devi scegliere un campo per la specializzazione')
      return;
    }

    console.log
      (`il nome è ${fullName}, con username:${userName}, 
      la sua specializzazione è ${specializzazione},con ${yearOfExperience} 
      anni di esperienza, descrizione:${description}`)
  }

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = '!@#$%^&*()-_=+[]{}|;:\\",.<>?/`~';
  const symbol = "'"

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            type="text" />
          {fullName.length <= 5 || [...fullName].some(
            char => numbers.includes(char) ||
              symbols.includes(char) ||
              symbol.includes(char)) ? <p>non valido</p> : <p>valido</p>}
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
          />
          {password.length >= 8 && [...password].some(
            char => numbers.includes(char)) &&
            [...password].some(
              char => letters.includes(char)) &&
            [...password].some(
              char => symbols.includes(char)) ? <p> valido</p> : <p> non valido</p>}
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
            onChange={(e) => setDescription(e.target.value)} >
          </textarea>
          {description.trim().length >= 100 && description.trim().length <= 1000 ? <p>valido</p> : <p>non valido</p>}

          <button type='submit'>Invia</button>
        </form>
      </div>
    </>
  )
}

export default App
