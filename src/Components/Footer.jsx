import { Link } from "react-router-dom"
import "./Footer.css"
export function Footer (){
    return (
       <>
       <div className="footer">
        <div className="uppercontent">
            <div>
                 <h4>BITRIX</h4>
                 <p><Link style={{color: 'white'}} to="/">Bitrix24</Link></p>
                 <p ><Link style={{color: 'white'}} to="/prices/">Pricing</Link></p>
                 <p>Media kit</p>
                 <p>Contact us</p>
                 <p>In the press</p>
                 <p>Bitrix24 August Sale</p>
            </div>
            <div>
                 <h4>SUPPORT</h4>
                 <p>Helpdesk</p>
                 <p>Webinar</p>
                 <p>How-to videos</p>
                 <p>Submit a ticket</p>
                 <p>Schedule a demo</p>
                 <p>Bitrix24 Status page</p>
            </div>
            <div>
                 <h4>RESOURCES</h4>
                 <p><Link style={{color: 'white'}} to="/blogs">Blog</Link></p>
                 <p>Solutions</p>
                 <p>Testimonials</p>
                 <p>Alternatives</p>
                 <p>Uses</p>
                 <p>Guides</p>
                 <p>Research</p>
            </div>
            <div>
                 <h4>ON-PREMISE</h4>
                 <p>On-premise edition</p>
                 <p>Download</p>
                 <p>Documentation</p>
            </div>     
            <div>
                 <h4>APPS</h4>
                 <p>Market</p>
                 <p>Mobile App</p>
                 <p>Desktop App</p>
                 <p>API/developers</p>
            </div>
            <div>
                 <h4>PARTNERS</h4>
                 <p>Find a partner</p>
                 <p>Become a partner</p>
                 <p>Partner login</p>
            </div>

        </div>
          <br /><br /><br /> <br />
        <hr />
       <p> <p>TERMS </p> <p> PRIVACY </p> <p>GDPR</p>  <p>SECURITY</p>  <p>ABUSE</p> <p>RULES FOR BITRIX24.SITES</p></p>
        <p>Copyright © 2022 Bitrix24</p>
       <div className="footericon">
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMd55SUdN-YNfvxZYhd53_xSd-SI9NS7LEMdGSWU7yOF9bX4Y1v55FeTm7J0jk7Jlfeew&usqp=CAU" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UXLCXpWwIRN4xJ4YWIeHZY5AJQSIX9gYh2Va8tb74Q&s" alt="" />
                <img src="https://www.freepnglogos.com/uploads/linkedin-logo-design-30.png" alt="" />
                <img src="https://cdn4.vectorstock.com/i/1000x1000/89/48/pinterest-logo-icon-isolated-on-white-background-vector-36028948.jpg" alt="" />
                <input type="text"  placeholder=" Search"/>
            </div>
       </div>
       </div>
       </>
    )
}