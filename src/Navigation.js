import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import logo from "./images/logo.png";
import PicCart from "./images/Cart.png";
import Home from "./Home";
import About from "./About";
import MyGallery from "./MyGallery";
import Price from "./Price";
import Contact from "./Contact";
import Cart from "./Cart";

function Navigation() {
    return <Router>
        <nav className=" nav nav_style">
            <Link to="/#Home"><img src={logo} alt="logo"></img></Link>
            <Link to="/#About">About</Link>
            <Link to="/#MyGallery">Gallery</Link>
            <Link to="/#Price">Price</Link>
            <Link to="/#Contact">Contact</Link>
            <Link to="/#Cart">
                <img src={PicCart} alt="cart" />
            </Link>
        </nav>
        <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/MyGallery" element={<MyGallery />} />
            <Route path="/Price" element={<Price />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/*" element={<Home />} />
        </Routes>
    </Router>

}

export default Navigation;