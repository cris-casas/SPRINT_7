import { useState } from 'react'
import { useEffect } from 'react'
import WebOptions from "./components/WebOptions"

const Page2 = () => {

  const [isChecked, setIsChecked] = useState([]);
  const [total, setTotal] = useState(0);
  const [numPages, setNumPages] = useState(0);
  const [numLanguages, setNumLanguages] = useState(0);

  const incrementPages = () => {
    setNumPages(numPages + 1);
  };

   // Condicional ternario

  const decreasePages = () => numPages > 0 ? setNumPages(numPages - 1) : null;
  
  const incrementLang = () => {
    setNumLanguages(numLanguages + 1);
  };

  const decreaseLang = () => numLanguages > 0 ? setNumLanguages(numLanguages - 1) : null;

  const handleCheckbox = (event) => {
    const value = +event.target.value;
    const checked = event.target.checked;

    if (checked) {
      setIsChecked([...isChecked, value]);
    } else {
      setIsChecked(isChecked.filter((e) => e !== value));
    }
  };

  useEffect(() => {
    const subtotal = isChecked.reduce((acc, curr) => acc + curr, 0);
    const pagesCost = numPages * 30;
    const languagesCost = numLanguages * 30;
    const newTotal = subtotal + pagesCost + languagesCost;
    setTotal(newTotal);
  }, [isChecked, numPages, numLanguages]);

  useEffect(() => {
    let data = localStorage.getItem('valores')
    if (data) {
      setTotal(JSON.parse(data))
    }
    console.log(JSON.parse(data))
  }, [])

  useEffect(() => {
    localStorage.setItem('valores', JSON.stringify(total))
  }, [ total ])
  

  return (
    <form>
      <p>¿Qué quieres hacer?</p>
      <p>
      <input type="checkbox" id="pagina-web" value={500} onChange={handleCheckbox} />
      <label htmlFor="pagina-web">Una página web (500€)</label>
      </p>
      {isChecked.includes(500) ? <WebOptions 
        onIncreasePages={incrementPages}
        onDecreasePages={decreasePages}
        onIncrementLang={incrementLang}
        onDecreaseLang={decreaseLang}
        numPages={numPages}
        numLanguages={numLanguages}
      /> : null}
      <p>
      <input type="checkbox" id="consultoria-seo" value={300} onChange={handleCheckbox} />
      <label htmlFor="consultoria-seo">Una consultoría SEO (300€)</label>
      </p>
      <p>
      <input type="checkbox" id="campanya-google-ads" value={200} onChange={handleCheckbox} />
      <label htmlFor="campanya-google-ads">Una campaña de Google Ads (200€)</label>
      </p>
      <p>Preu: {total}€</p>
    </form>
  );
}

export default Page2;

/*


const Page2 = () => {

  const [isChecked, setIsChecked] = useState([]);
  const [total, setTotal] = useState(0);
  const [numPages, setNumPages] = useState(0);
  const [numLanguages, setNumLanguages] = useState(0);

  const incrementPages = () => {
    setNumPages(numPages + 1);
  };

   // Condicional ternario

  const decreasePages = () => numPages > 0 ? setNumPages(numPages - 1) : null;
  
  const incrementLang = () => {
    setNumLanguages(numLanguages + 1);
  };

  const decreaseLang = () => numLanguages > 0 ? setNumLanguages(numLanguages - 1) : null;

  const handleCheckbox = (event) => {
    const value = +event.target.value;
    const checked = event.target.checked;

    if (checked) {
      setIsChecked([...isChecked, value]);
    } else {
      setIsChecked(isChecked.filter((e) => e !== value));
    }
  };

  useEffect(() => {
    const subtotal = isChecked.reduce((acc, curr) => acc + curr, 0);
    const pagesCost = numPages * 30;
    const languagesCost = numLanguages * 30;
    const newTotal = subtotal + pagesCost + languagesCost;
    setTotal(newTotal);
  }, [isChecked, numPages, numLanguages]);

  useEffect(() => {
    let data = localStorage.getItem('valores')
    if (data) {
      setTotal(JSON.parse(data))
    }
    console.log(JSON.parse(data))
  }, [])

  useEffect(() => {
    localStorage.setItem('valores', JSON.stringify(total))
  }, [ total ])
  

  return (
    <form>
      <p>¿Qué quieres hacer?</p>
      <p>
      <input type="checkbox" id="pagina-web" value={500} onChange={handleCheckbox} />
      <label htmlFor="pagina-web">Una página web (500€)</label>
      </p>
      {isChecked.includes(500) ? <WebOptions 
        onIncreasePages={incrementPages}
        onDecreasePages={decreasePages}
        onIncrementLang={incrementLang}
        onDecreaseLang={decreaseLang}
        numPages={numPages}
        numLanguages={numLanguages}
      /> : null}
      <p>
      <input type="checkbox" id="consultoria-seo" value={300} onChange={handleCheckbox} />
      <label htmlFor="consultoria-seo">Una consultoría SEO (300€)</label>
      </p>
      <p>
      <input type="checkbox" id="campanya-google-ads" value={200} onChange={handleCheckbox} />
      <label htmlFor="campanya-google-ads">Una campaña de Google Ads (200€)</label>
      </p>
      <p>Preu: {total}€</p>
    </form>
  );
}

export default Page2;
*/
