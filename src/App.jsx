import Footer from "./components/Footer"
import Header from "./components/Header"
import Network from "./components/Network"
import RecentlyJoined from "./components/RecentlyJoined"
import WhiteList from "./components/WhiteList"

const App = () => {
  return (
    <div className="bg-[#fffdfd]">
      <Header/>
      <WhiteList/>
      <Network/>
      <RecentlyJoined/>
      <Footer/>
    </div>
  )
}

export default App
