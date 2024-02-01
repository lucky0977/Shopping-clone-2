import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import All from './pages/All';
import Shopcategory from './pages/Shopcategory'
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/Footer/Footer';
import kidsBanner from './components/Assets/banner_kids.png';
import MensBanner from './components/Assets/banner_mens.png';
import WomensBanner from './components/Assets/banner_women.png'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<All/>}/>
    <Route path='/mens' element={<Shopcategory banner={MensBanner} category="Men"/>}/>
    <Route path='/womens' element={<Shopcategory banner={WomensBanner} category="Women"/>}/>
    <Route path='/kids' element={<Shopcategory banner={kidsBanner} category="Kid"/>}/>
    <Route path='/product/' element={<Product/>}>
    <Route path=':productId' element={<Product/>}/>

    </Route>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/login' element={<LoginSignup/>}/>

    </Routes>
    <Footer/>

    </BrowserRouter>
    </div>
  );
}

export default App;
