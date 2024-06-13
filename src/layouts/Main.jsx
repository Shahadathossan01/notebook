import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div style={{padding:'40px',marginTop:'50px'}}>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;