import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div>
            <h1>Bienvenido!</h1>
            <p>bla bla bla</p>
            <Link to="/page2">
                <button>Calcula</button>
            </Link>
        </div>
    );
};

export default Home;