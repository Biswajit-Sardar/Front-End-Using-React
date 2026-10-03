import Student from './components/Basic-Props/Student'
import UserProfile from './components/Basic-Props/UserProfile'
import AlertBox from './components/Basic-Props/AlertBox'
import Card from './components/Children-Prop/Card'
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

      <AlertBox type="success" title="Success" message="Operation completed." />
      <AlertBox type="error" title="Error" message="Something went wrong." />
      <AlertBox type="warning" title="Warning" message="Check your input." />
      <AlertBox title="Note" message="This is informational." />


      <Card title="About Me">
        <p>My name is Alice and I am learning React.</p>
        <p>I enjoy building web applications.</p>
      </Card>

      <Card title="Skills">
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>CSS</li>
        </ul>
      </Card>






    </div>
  )
}
export default App