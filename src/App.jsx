import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'

function App() {

    const [search, setSearch] = useState(''); // Creamos un estado

    return (
      <form
        onSubmit={ev => {
          ev.preventDefault();
          setSearch(ev.target.search.value); // Recogemos el valor
        }}
      >
        <input type='text' name='search' autoComplete='off'></input>
        <button type='submit'>Buscar</button>
        <p>Resultados para: {search}</p> {/* Mostramos el valor*/}
      </form>  
    );

};

export default App;

/*  
      <input type="checkbox" id="ads" name="ads"/>
      <label htmlFor="web">Una campanya de Google Ads (200€)</label>
*/

/*   const total = web   */

/*

function App() {

  const [web, setWeb] = useState(false);
  const [seo, setSeo] = useState(false);
  const [suma, setSuma] = useState(0);

  const resultSuma = () => {

    let nuevaSuma = 0;
    if (web) nuevaSuma += 500;
    if (seo) nuevaSuma += 300;
    setSuma(nuevaSuma);
  }

return (
  <div>

    <span>¿Qué quieres hacer?</span>

    <form>
    <input type="checkbox" checked={web} onChange={()=>{setWeb(!web);resultSuma();}} id="web" name="web"/>
    <label htmlFor="web">Una pàgina web (500€)</label>
    <br></br>
    <input type="checkbox" checked={seo} value="seo" onChange={()=>{setSeo(!seo);resultSuma();}} id="seo" name="seo"/>
    <label htmlFor="seo">Una consultoria SEO (300€)</label>
    <br></br>
    <br></br>
    <p>Suma: {suma}</p>
    </form>
  </div>
);
};

*/








/*

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App

*/