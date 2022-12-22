import Footer from "./components/Footer"
import Header from "./components/Header"
import RecentlyJoined from "./components/RecentlyJoined"
import WhiteList from "./components/WhiteList"

const App = () => {
  return (
    <div className="h-screen">
      <Header/>
      <WhiteList/>
      <RecentlyJoined/>
      <Footer/>
    </div>
  )
}

export default App
