export default function Buttons() {
    return (
        <div>
            <button className="quantity-button" onClick={() => console.log('Hiciste clic en el botón')}>+</button>
            <input type="text"></input>
            <button onClick={() => console.log('Hiciste clic en el botón')}>-</button>

        </div>
    )
}