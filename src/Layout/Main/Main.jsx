import { Outlet} from "react-router-dom";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";


const Main = () => {



    return (
        <div>
           <Navbar></Navbar> 
            <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;