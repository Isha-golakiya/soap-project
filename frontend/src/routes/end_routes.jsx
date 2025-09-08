import {Route,Routes} from 'react-router-dom';
import EndLayout from '../layout/end_layout';
import Home from '../pages/home';
import About from '../pages/about';
import Shop from '../pages/shop';
import Contact from '../pages/contact';
import Organic from '../pages/organic';
import Herbal from '../pages/herbal';
import Hand from '../pages/hand';
import Plant from '../pages/plant';
import Cart from '../pages/cart';

const EndRoutes=()=>{
return(
    <>
    <Routes>
        <Route path='/' element={<EndLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='/about'element={<About/>}/>
            <Route path='/shop' element={<Shop/>} />   
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/shop/organic' element={<Organic/>}/>
            <Route path='/shop/hand' element={<Hand/>}/>
            <Route path='/shop/herbal' element={<Herbal/>}/>
            <Route path='/shop/plant' element={<Plant/>}/>
            <Route path='/shop/handmade' element={<Hand/>}/>
            <Route path='/cart' element={<Cart/>}/>    
        </Route>
    </Routes>
    </>
)
}
export default EndRoutes;
