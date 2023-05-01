import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/home';
import Page2 from '../pages/page2';

const Router = () => {

    return (
        
    <BrowserRouter>
        <Routes>   
            <Route index element={<Home/>} />
            <Route path="/page2/" element={<Page2/>} />
        </Routes>
    </BrowserRouter>

    );
}

export default Router;
