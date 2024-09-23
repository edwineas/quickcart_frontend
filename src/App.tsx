import Navbar from "./components/Navbar"
import Login from "./pages/Auth/Login"
import Feed from "./pages/Public/Feed"

function App() {
  return (
    <>
      <Navbar />
      <div className=" p-5 sm:px-20 md:px-40 sm:py-10">
          <Feed />
      </div>
    </>
  )
}

export default App
