import { useState, useRef } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  console.log('render')

  const [fullName, setFullName] = useState('');
  const usernameRef = useRef();
  const [password, setPassword] = useState('');
  const [specializzazione, setSpecializzazione] = useState('');
  const yearOfExperience = useRef();
  const [description, setDescription] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      fullName.trim() === '' ||
      usernameRef.current.value.trim() === '' ||
      description.trim() === ''
    ) {
      console.log('il nome,username o descrizione non può essere vuoto')
      return;
    }

    if (yearOfExperience.current.value < 0) {
      console.log('per gli anni di esperienza il numero non può essere negativo')
      return;
    }
    if (specializzazione === 'Scegli la specializzazione') {
      console.log('devi scegliere un campo per la specializzazione')
      return;
    }

    console.log(`
      il nome è ${fullName}, con username:${usernameRef.current.value}, 
      la sua specializzazione è ${specializzazione},con ${yearOfExperience.current.value} 
      anni di esperienza, descrizione:${description}
      `)
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
            placeholder='inserisci il tuo nome completo'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            type="text" />
          {fullName.length <= 5 || [...fullName].some(
            char => numbers.includes(char) ||
              symbols.includes(char) ||
              symbol.includes(char)) ? <p>non valido</p> : <p>valido</p>}
          <input
            placeholder='inserisci username'
            ref={usernameRef}
            type="text" />
          <input
            placeholder='inserisci password'
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
          <h3>anni esperienza</h3>
          <input
            ref={yearOfExperience}
            type="number" />
          <textarea
            placeholder='aggiungi una descrizione'
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
