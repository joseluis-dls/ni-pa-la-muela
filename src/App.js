import { AuthContextProvider } from "./components/auth/AuthContext";
import { MyRoutes } from "./routes/App";

function App(){
    return(
       <AuthContextProvider>
            <MyRoutes/>
       </AuthContextProvider> 
    )
}

export default App;