import { Route, Routes } from "react-router-dom"
import HomePage from "./HomePage"
import BlogPage from "./BlogPage"
import Login from "./Login"
import SignUp from "./SignUpPage"
function AllRoutes(){
    return (
        <div>
          <Routes>
           <Route path="/" element={<HomePage/>} />
           <Route path="/login" element={<Login/>} />
           <Route path="/signup" element={<SignUp/>} />
           <Route path="/blogs" element={<BlogPage/>}/>
          </Routes>

        </div>
    )
}

export default AllRoutes