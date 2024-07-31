import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import UserList from "./components/UserList"
import UserDetails from "./components/UserDetails"

function App() {





  return (
    <>
    <Navbar/>
    <div className="flex flex-col lg:flex-row">
    <UserList/> 
    <div className="flex-grow flex justify-center items-center">
      <Routes>
      <Route path='/userDetails/:id' element={<UserDetails />}></Route>
      </Routes>
      </div>
      </div>
    </>
  )
}

export default App
