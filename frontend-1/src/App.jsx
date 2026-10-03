
import  Student from './components/Basic-Props/Student.jsx'
import './App.css'

function App() {
  return (


  <div className="app">
    <h2>Student List</h2>
    <Student name="Alice" age={20} grade="A" />
    <Student name="Bob" age={22} grade="B+" />
    <Student name="Charlie" age={21} grade="A-" />
    </div>
  )
}
export default App