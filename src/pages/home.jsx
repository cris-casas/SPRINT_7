import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div>
            <h1>Bienvenido!</h1>
            <p>Calcula el teu pressupost a mida segons els nostres serveis:</p>
            <Link to="/page2">
                <button>Calcula</button>
            </Link>
        </div>
    );
};

export default Home;