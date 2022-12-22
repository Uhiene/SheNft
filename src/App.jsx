import Header from "./components/Header"
import RecentlyJoined from "./components/RecentlyJoined"
import WhiteList from "./components/WhiteList"

const App = () => {
  return (
    <div className="h-screen">
      <Header/>
      <WhiteList/>
      <RecentlyJoined/>
    </div>
  )
}

export default App
