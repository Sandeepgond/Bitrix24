import "./BlogPage.css"
import { Footer } from "./Footer";
import { Navbar } from "./Navbar"
export default function Blog(){
    return(
        <div>
            <div className="navbarManipulation"><Navbar/></div>
           <h1 className="blog">Blogs</h1>
           <div className="blogGrid">
            <div>
                <img src="https://d57439wlqx3vo.cloudfront.net/iblock/03a/03a8025b9b1b096ac201712995bc2593/34a6eb0d1e4657f7d73f4fadcd492bd2.jpg?1661352910963" alt="" />
                 <h2>Traditional and Simplified Chinese For You On-Premise Bitrix24 By CloudEZ</h2>
                <p>For Bitrix24 users in the Chinese-speaking world - The Simplified and Traditional Chinese language packs for Bitrix24 On-Premise version have been translated and compiled by Bitrix24 Gold partner in Taiwan - CloudEZ Digital Service Ltd, and are available now for purchase all over the world.</p>
                <button>read more</button>
                <div><p>Bitrix24 tips and updates</p></div>
            </div>
            <div>
                <img src="https://d57439wlqx3vo.cloudfront.net/iblock/d1a/d1aaf585098b4068d90bcc65c29455a0/b34b5a8010849626e07fe7af0c615cd7.jpg?1661352910963" alt="" />
                 <h2>Traditional and Simplified Chinese For You On-Premise Bitrix24 By CloudEZ</h2>
                <p>For Bitrix24 users in the Chinese-speaking world - The Simplified and Traditional Chinese language packs for Bitrix24 On-Premise version have been translated and compiled by Bitrix24 Gold partner in Taiwan - CloudEZ Digital Service Ltd, and are available now for purchase all over the world.</p>
                <button>read more</button>
                <div><p>Bitrix24 tips and updates</p></div>
            </div>
            <div>
                <img src="https://d57439wlqx3vo.cloudfront.net/iblock/99d/99d9e8dff3ab6afd6c54e267e4fdd2fe/d322ba56617932760290881bb10a0952.jpg?1661352910963" alt="" />
                 <h2>Traditional and Simplified Chinese For You On-Premise Bitrix24 By CloudEZ</h2>
                <p>For Bitrix24 users in the Chinese-speaking world - The Simplified and Traditional Chinese language packs for Bitrix24 On-Premise version have been translated and compiled by Bitrix24 Gold partner in Taiwan - CloudEZ Digital Service Ltd, and are available now for purchase all over the world.</p>
                <button>read more</button>
                <div><p>Bitrix24 tips and updates</p></div>
            </div>
            <div>
                <img src="https://d57439wlqx3vo.cloudfront.net/iblock/981/98125997a8d33c34d73e040f496ead48/a171845163e67fc116f84b19ab51b103.jpg?1661352910963" alt="" />
                 <h2>Traditional and Simplified Chinese For You On-Premise Bitrix24 By CloudEZ</h2>
                <p>For Bitrix24 users in the Chinese-speaking world - The Simplified and Traditional Chinese language packs for Bitrix24 On-Premise version have been translated and compiled by Bitrix24 Gold partner in Taiwan - CloudEZ Digital Service Ltd, and are available now for purchase all over the world.</p>
                <button>read more</button>
                <div><p>Bitrix24 tips and updates</p></div>
            </div>
           </div>         
           <div className="free">
                <h1>Free. Unlimited. Online.</h1>
                <p>Bitrix24 is a place where everyone can communicate, collaborate on tasks and <br /> projects, manage clients and do much more.</p>
                 <br /><button>Register free</button> 
           </div>
           <div className="blogGrid">
            <div>
                <img src="https://d57439wlqx3vo.cloudfront.net/iblock/69a/69a10ac79203e5a2a11d7e029504fef1/dd5947446007cb062e91d459b15cd1e1.jpg?1661352910963" alt="" />
                 <h2>Synchronize Bitrix24 Calendar with iCloud</h2>
                {/* <p>For Bitrix24 users in the Chinese-speaking world - The Simplified and Traditional Chinese language packs for Bitrix24 On-Premise version have been translated and compiled by Bitrix24 Gold partner in Taiwan - CloudEZ Digital Service Ltd, and are available now for purchase all over the world.</p> */}
                <p>Set up iCloud Сalendar synchronization with your Bitrix24. All events from your iCloud Сalendar will appear in your Bitrix24 Calendar and the other way around.</p>
                <button>read more</button>
                <div><p>Bitrix24 tips and updates</p></div>
            </div>
            <div>
                <img src="https://d57439wlqx3vo.cloudfront.net/iblock/8fb/8fbeb46bc656693e806453da07f73085/193f2af7e275fe8cfff05b94fe38df02.jpg?1661352910963" alt="" />
                 <h2>Website Page Settings</h2>
                <p>We've gathered website and webpage settings in a single slider for your convenience. Change page design, edit blocks, set up analytics, change rich formatting for social media, etc. - all in a single place.</p>
                <button>read more</button>
                <div><p>Bitrix24 tips and updates</p></div>
            </div>
            <div>
                <img src="https://d57439wlqx3vo.cloudfront.net/iblock/9af/9af24bfc0df84b9ec238868e58a2310c/d397239d16ebb0fdac2435ae643d8a48.jpg?1661352910963" alt="" />
                 <h2>Website Access Permissions</h2>
                <p>Configure Bitrix24 website access permissions - who can access particular site sections or which actions can be performed by specific users (view, edit, edit settings, publish or even delete).</p>
                <button>read more</button>
                <div><p>Bitrix24 tips and updates</p></div>
            </div>
            <div>
                <img src="https://d57439wlqx3vo.cloudfront.net/iblock/2d3/2d37c3af0f81da6197a1758dc12e34fb/3b07bb7bff7e100c0246764054f8b343.jpg?1661352910963" alt="" />
                 <h2>Document Opened Trigger For Sales Automation</h2>
                <p>Document opened trigger will help you to automate work with invoices and quotes. It is triggered when the client opens a public link to the document.</p>
                <button>read more</button>
                <div><p>Bitrix24 tips and updates</p></div>
            </div>
           </div>

          <div className="footerManipulation">
            <Footer/>       
          </div>
        </div>
       
    )
}