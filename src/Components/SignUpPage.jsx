import { Link } from "react-router-dom"
import "./SignUpPage.css"
function SignUp(){
    return (
       
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
                    <h1>Bitrix24 Registration</h1><hr />
                    <p>Use your social account to register</p>
                    <div className="logo">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeTg9X1HQRxZ908Nwcvy9P6jMPdwiL_Hu0Q3YTtmLoYA&s" alt="" />
                        <img src="https://1000logos.net/wp-content/uploads/2019/06/Google-Logo.jpg" alt="" />
                        <img src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png" alt="" />
                        <img src="https://previews.123rf.com/images/vastard/vastard1809/vastard180900454/107801720-open-box-unbox-unboxing-logo-vector-icon-illustration.jpg" alt="" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK_QmwMOJbkeDHbIpZOA-mqtQzLwD0HOFv_XjPXKvs&s" alt="" />
                    </div> <br />
                    <hr /> <br /> OR
                    <h1>Enter Email</h1>
                    <input className="pad" type="text" /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <button className="but">START FOR FREE</button>
                </div>
            </div>
       
    )
}
export default SignUp