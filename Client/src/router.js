import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import Courses from "./components/Courses";
import MyChoices from "./components/MyChoices";
import Cours from "./components/Cours";
import Contact from "./components/Contact";
import About from "./components/About";
import PaymentForm from "./components/PaymentForm";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import UserInfo from "./components/UserInfo";

const router = createBrowserRouter([
    {
        element: <Layout />, 
        children: [
          { path: "/", element: <HomePage /> },
          {
            path:"/MyChoices",
            element:<MyChoices/>
        },
        {
            path:"/Contact",
            element:<Contact/>
        },
        {
            path:"/Login",
            element:<Login/>
        },
        {
            path:"/Signup",
            element:<SignUp/>
        },
        {
            path:"/About",
            element:<About/>
        },
      
        {
            path:"/UserInfo",
            element:<UserInfo/>
        },
        {
            path:"/payment",
            element:<PaymentForm/>
        },
        {
            path:"/Courses",
        
        children:[
            {
                index:true,
                element:<Courses/>
            },
            {
                path:":lang",
                element:<Cours/>
            }
        ]
        },
        ]
      }
]

);

export default router 



