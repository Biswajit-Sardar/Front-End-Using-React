import Student from './components/Basic-Props/Student'
import UserProfile from './components/Basic-Props/UserProfile'
import './App.css'

function App() {
  const user = {
    name:"Alice Johnson",
    email:"alice@example.com",
    location:"New York",
    role:"Developer"
  };
  return (
   <div className="app">
      <h2>Student List</h2>
      <Student name="Alice" age={20} grade />
      <Student name="Bob" age={22} />
      <Student name="Charlie" age={21} />
<UserProfile user={user} />

    </div>
  )
}
export default App