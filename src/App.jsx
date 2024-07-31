import './App.css';
import Image from './Image.jsx';
import Login from './Login.jsx';

function App() {
  return (
    <>
      {/* Main Block */}
      <div className='mainblock'>

        {/* Image Block */}
        <div className='imgblock'>
          <span >
            <Image/>
          </span>
        </div>

        {/* Login Block */}
        <div className='loginblock'>
          <span>
            <Login/>
            {/* <h1>React</h1> */}
          </span>
        </div>
      </div>
    </>
  )
}

export default App
