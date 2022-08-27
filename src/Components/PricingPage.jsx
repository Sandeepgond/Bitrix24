import { Link } from "react-router-dom"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"
import "./PricingPage.css"
function Pricing(){
    return (
        <div>
            <div className="navbarManipulation"><Navbar/></div>
            <h1 className="blog">Pricing</h1>
            <img src="https://www.bitrix24.in/upload/rk/3fc/b5nzeckaswugoa6vm15ktqwj0rvcn58x.jpg?1657626164021" alt="" />
            <div className="yearwise">
                <div>
                    <p>Price per month when paying for</p>
                    <button><p><b>1</b> year</p>  <p><span>-30%</span></p> </button>
                </div>
                <div>
                    <p>Renew plans bought before August 1, 2022</p>
                    <button><p>Archived Plans</p></button>
                </div>
            </div>

            <div className="midSec">
            <div>
                <div class="compare-4-up-div">
                    <h3>FREE</h3>            
                    <p>Start working online and sell more with CRM</p>
                </div>
                <div>
                    <h4 className="bold">Unlimited </h4> <h4>users</h4>
                    <p className="color">100% free</p>
                    <br /><br />
                    <Link to="/signup"><button className="green-btn">REGISTER FREE</button></Link>
                    <p className="bold">5 GB</p>
                    <hr />
                </div>
                <div className="down_div">
                    <h3>Colloboration</h3>
                    <h4>Chat</h4>
                    <h4>HD Videocalls</h4>
                    <h4>Calender</h4>
                    <h4>Company workspace</h4>
                    <h4>Feed</h4>
                    <h4>Knowledge base</h4>
                    <h3>Tasks & Project</h3>
                    <h3>CRM</h3>
                    <h3>Drive</h3>
                    <h3>Contact Center</h3>
                    <h3>Website Builder</h3>
                </div>

            </div>
            <div>
                <div class="compare-4-up-div-blue">
                    <h3>Basic</h3>            
                    <p>Effective collaboration for small businesses and sales teams</p>                              
                </div>
                <div>
                <h4 className="bold">5 </h4> <h4>users</h4>
                    <p className="color-blue">Rs.3,052/mo <span>-30%</span></p>
                    <p><u>for all users</u> </p>
                    <br />
                    <button className="blue-btn">BUY</button>
                    <p className="bold">24 GB</p>
                    <hr />
                </div>
                <div className="down_div">
                    <h3>Colloboration</h3>
                    <h4>Chat</h4>
                    <h4>HD Videocalls</h4>
                    <h4>Calender</h4>
                    <h4>Company workspace</h4>
                    <h4>Feed</h4>
                    <h4>Knowledge base</h4>
                    <h3>Tasks & Project</h3>
                    <h3>CRM</h3>
                    <h3>Drive</h3>
                    <h3>Contact Center</h3>
                    <h3>Website Builder</h3>
                    <h3>Online store</h3>
                    <br /> <br /><br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /><br />
                    <h3>Customer support</h3>
                    
                </div>
            </div>
            <div>
                <div class="compare-4-up-div-blue">
                    <h3>Standard</h3>            
                    <p>Advanced collaboration for your entire company and workgroups</p>
                </div>
                <div>
                    <h4 className="bold">50</h4> <h4>users</h4>
                    <p className="color-blue">Rs.6,118/mo <span>-30%</span></p>
                    <p><u>for all users</u> </p>
                    <br />
                    <button className="blue-btn">BUY</button>
                    <p className="bold">100 GB</p>
                    <hr />
                </div>
                <div className="down_div">
                    <h3>Colloboration</h3>
                    <h4>Chat</h4>
                    <h4>HD Videocalls</h4>
                    <h4>Calender</h4>
                    <h4>Company workspace</h4>
                    <h4>Feed</h4>
                    <h4>Knowledge base</h4>
                    <h3>Tasks & Project</h3>
                    <h3>CRM</h3>
                    <h3>Drive</h3>
                    <h3>Contact Center</h3>
                    <h3>Website Builder</h3>
                    <h3>Online store</h3>
                    <h3>Marketing</h3>
                    <h3>Online documents</h3>
                    <br /><br /> <br /><br /><br /><br /><br /><br /> <br /><br /><br />
                    <h3>Customer support</h3>
                    <h3>Administration</h3>
                </div>
            </div>
            <div>
                <div class="compare-4-up-div-blue">
                    <h3>Professional</h3>            
                    <p>Maximum sales and business process automation</p>
                </div>
                <div>
                    <h4 className="bold">100</h4> <h4>users</h4>
                    <p className="color-blue">Rs.12,243/mo <span>-30%</span></p>
                    <p><u>for all users</u> </p>
                    <br />
                    <button className="blue-btn">BUY</button>
                    <p className="bold">1024 GB</p>
                    <hr />
                </div>
                <div className="down_div">
                    <h3>Colloboration</h3>
                    <h4>Chat</h4>
                    <h4>HD Videocalls</h4>
                    <h4>Calender</h4>
                    <h4>Company workspace</h4>
                    <h4>Feed</h4>
                    <h4>Knowledge base</h4>
                    <h3>Tasks & Project</h3>
                    <h3>CRM</h3>
                    <h3>Drive</h3>
                    <h3>Contact Center</h3>
                    <h3>Website Builder</h3>
                    <h3>Online store</h3>
                    <h3>Marketing</h3>
                    <h3>Online documents</h3>
                    <h3>Sales Intelligence</h3>
                    <h3>Automation</h3>
                    <h3>HR</h3>
                    <br /><br /> <br /><br /><br /><br />
                    <h3>Customer support</h3>
                    <h3>Administration</h3>

                </div>
            </div>
            <div>
                <div class="compare-4-up-div-diff">
                    <h3>Enterprise</h3>            
                    <p>Digital transformation tools for large businesses and enterprises</p>
                </div>
                <div>
                    <h4 className="bold">250 </h4> <h4> users</h4>
                    <p className="color-blue">Rs.24,493/mo <span>-30%</span></p>
                    <p><u>for all users</u> </p>
                    <br />
                    <button className="blue-btn">BUY</button>
                    <p className="bold">3 TB</p>
                    <hr />
                </div>
                <div className="down_div">
                    <h3>Colloboration</h3>
                    <h4>Chat</h4>
                    <h4>HD Videocalls</h4>
                    <h4>Calender</h4>
                    <h4>Company workspace</h4>
                    <h4>Feed</h4>
                    <h4>Knowledge base</h4>
                    <h3>Tasks & Project</h3>
                    <h3>CRM</h3>
                    <h3>Drive</h3>
                    <h3>Contact Center</h3>
                    <h3>Website Builder</h3>
                    <h3>Online store</h3>
                    <h3>Marketing</h3>
                    <h3>Online documents</h3>
                    <h3>Sales Intelligence</h3>
                    <h3>Automation</h3>
                    <h3>HR</h3>
                    <h3>Multiple branches</h3>
                    <h3>Scalability</h3>
                    <h3>Enterprise pack</h3>
                    <br />
                    <h3>Customer support</h3>
                    <h3>Administration</h3>
                </div>
            </div>
         </div>
         <br /> <br />
         <div className="adjustment">
         <div className="yearwise">
                <div>
                    <p>Renew plans bought before August 1, 2022</p>
                    <button><p>Archived Plans</p></button>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
        
    )
}

export default Pricing