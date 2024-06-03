import {Routes,Route} from 'react-router-dom'
import Home from "./Components/Pages/Home/Home"
import Login from "./Components/Pages/Login/Login"


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
      </Routes>
      
    </div>
  )
}

export default App
