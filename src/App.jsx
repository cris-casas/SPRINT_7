import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'

function App() {

  const [isChecked, setIsChecked] = useState([]);
  const [total, setTotal] = useState(0);

  const handleCheckbox = (event) => {
    const value = +event.target.value;
    const checked = event.target.checked;

    if (checked) {
      setIsChecked([...isChecked, value]);
      setTotal(total + value);
    } else {
      setIsChecked(isChecked.filter((e) => e !== value));
      setTotal(total - value);
    }
  };

  return (
    <form>
      <p>¿Qué quieres hacer?</p>
      <br></br>
      <input type="checkbox" id="pagina-web" value={500} onChange={handleCheckbox} />
      <label htmlFor="pagina-web">Una pàgina web (500€)</label>
      <br></br>
      <input type="checkbox" id="consultoria-seo" value={300} onChange={handleCheckbox} />
      <label htmlFor="consultoria-seo">Una consultoria SEO (300€)</label>
      <br></br>
      <input type="checkbox" id="campanya-google-ads" value={200} onChange={handleCheckbox} />
      <label htmlFor="campanya-google-ads">Una campanya de Google Ads (200€)</label>
      <br></br>
      <p>Preu: {total}€</p>
    </form>
  );

};

export default App;

/*
function App() {

    const [sumaArray, setSumaArray] = useState([]); // Creamos un estado

    // Convé guardar el pressupost total calculat en un estat.

    const handleChange = (event) => {
        const value = event.target.value;
        const checked = event.target.checked;
        //console.log(value,checked)
        if(checked){
          setSumaArray([...sumaArray, Number(value)])
        }
        else {
          setSumaArray(sumaArray.filter((e) => (e !== Number(value))));
        }
      }

    return (
      <form>
        <input type="checkbox" value="500" onChange={handleChange} />
        <label>Una pàgina web (500€)</label>
        <input type="checkbox" value="300" onChange={handleChange} />
        <label>Una consultoria SEO (300€)</label>
        <p>Resultados para: {total}</p>
      </form>  
    );

};

export default App;

*/

/*

function App() {

    const [checkedValues, setValue] = useState(false); // Creamos un estado
    const [suma, setSuma] = useState(0);

    // Convé guardar el pressupost total calculat en un estat.

    function handleChange(event){

      const{value, checked} = event.target

      if(checked){
        setValue(value)
      }
    }

    console.log(checkedValues)

    return (
      <form>
        <input type="checkbox" checked={checkedValues} value="500" onChange={handleChange} />
        <label>Una pàgina web (500€)</label>
        <p>Resultados para: {checkedValues}</p>
        </form>  
        );
    
    };
    
    export default App;

*/

/*

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
      <p>Resultados para: {search}</p>
    </form>  
  );

};

export default App;

*/

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