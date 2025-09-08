import {Outlet} from "react-router-dom";
import Footer from "../components/footer";
import Login from "../components/login";
import Header from "../components/header";
import Register from "../components/register";

function EndLayout(){
return(
    <>
    <Register/>
    <Login/>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
)
}
export default EndLayout;