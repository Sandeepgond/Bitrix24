
import { Link } from "react-router-dom"
import "./Navbar.css"
export function  Navbar () {
    return <>
    <div id="container">
        <div > <a href="/"><img  class="image1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwGQTlNdYPjsCIMqY3h2GwbJWofSfcFFz7rL5ET5joQowopQ7e0DF4R47SA4AZwVVxkro&usqp=CAU" alt=""/></a></div>
        <div id="category">
            <div>TOOLS</div>
            <div>PRICING</div>
            <div>SOLUTIONS</div>
            <div>PARTNERS</div>
            <div>APP</div>
            <div> <Link  to="/blogs">BLOG</Link></div>
            <div>SUPPORT</div> 
        </div>
        <div id="navend">
        <div> <Link to="/signup"><button class="signup-1">START FOR FREE</button> </Link></div>
            <div><Link  to="/login">LOGIN</Link></div>
            <div>EN</div>
           
        </div>
    </div>
    
    
    
    
    </>
}