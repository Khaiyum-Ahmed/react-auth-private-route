import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer'

const Root = () => {
    return (
        <div className='max-w-11/12 mx-auto'>
            
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;