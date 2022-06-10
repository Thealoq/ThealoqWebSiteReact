import './App.css'
import Profile from './components/Profile'
import Github from './components/Github'
import Hello from './components/Hello'
import SongHistory from './components/SongHistory'




function App() {
  document.title = "Thealoq Was Here 💕";
  return (
    <div className="App">
      <Profile />
      <SongHistory />
      <Github />
      <Hello />
    </div>
  )
}

export default App
