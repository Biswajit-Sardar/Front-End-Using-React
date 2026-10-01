import Greeting from './components/single-components/Greeting'
import Header from  './components/multiple-components/Header/Header'
import Footer from './components/multiple-components/Footer/Footer'
import JSXExample from './components/Jsx-Examples/JSXExample.jsx'
import ConditionalRendering from './components/Conditional-Rendering/ConditionalRendering.jsx'
import InlineStyleExample from './components/inline-Style/InlineStyleExample.jsx'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <h1>React Fundamentals</h1>
      <p>Welcome to Module 13</p>
      <main className="main-content">
        <Greeting />
        <JSXExample />
        <ConditionalRendering />
        <InlineStyleExample />
      </main>
      
      <Footer />
    </div>
  )
}
export default App