import { createBrowserRouter } from "react-router-dom";
import App from './App.js';
import Body from '../Main/Body.js'
import Student from '../Students/Student.js'
import Staff from "../Staff/Staff.js";
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        children:[
          
          {
            path:"",
            element:<Body/>,
          },

          {
            path:"students",
            element:<Student/>,
            
          },
          {
            path:"staff",
            element:<Staff/>,
            
          }
        ]
      }


])
export default appRouter;
