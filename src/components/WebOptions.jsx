const WebOptions = ({onIncreasePages, onDecreasePages, onIncrementLang, onDecreaseLang, numPages, numLanguages}) => {
    return (
        <div>
            <label htmlFor="num-pagina-web">Número de páginas</label>
            <button type="button" onClick={onIncreasePages}>+</button>
            <input type="text" id="num-pagina-web" value={numPages}/>
            <button type="button" onClick={onDecreasePages}>-</button>
            <br />
            <label htmlFor="num-idiomas-web">Número de idiomas</label>
            <button type="button" onClick={onIncrementLang}>+</button>
            <input type="text" id="num-idiomas-web" value={numLanguages}/>
            <button type="button" onClick={onDecreaseLang}>-</button>
        </div>
    );
};

export default WebOptions;