import './App.css'
import Profile from './components/Profile'
import Header from './components/Header'
import Project from './components/Project'

function App() {
  
  document.title = "Thealoq Was Here 💕";

  return (
    <div className="App">
      <Profile />
      <Header />
      <Project />
    </div>
  )
}

export default App
