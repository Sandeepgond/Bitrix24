import "./SignUpPage.css"
import { Link } from "react-router-dom"
export default function Login(){
    return (
        <div>
            <div className="maindiv">
                <div className="subdiv">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwGQTlNdYPjsCIMqY3h2GwbJWofSfcFFz7rL5ET5joQowopQ7e0DF4R47SA4AZwVVxkro&usqp=CAU" alt="" />
                       <p><Link  to="/">back to site</Link></p>
                       <h1>Your company. United.</h1>  
                       <h2>Free. Unlimited. Online</h2>
                       <select> 
                        <option value="">English</option>
                        <option value="">Chinese</option>
                        <option value="">French</option>
                        <option value="">Italiano</option>
                        <option value="">Indonesia</option>
                        <option value="">Hindi</option>
                       </select>
                </div>
                <div>
                    <h1>Bitrix24 Login</h1>
                    {/* <p>Select an account or change user</p> */}
                    <br /><br /><br /><br />
                    <h1>Enter Email</h1>
                    <input className="pad" type="text" /> <br /><br /><br />
                    <button className="submit">Submit</button>
                </div>
            </div>
        </div>
    )
}