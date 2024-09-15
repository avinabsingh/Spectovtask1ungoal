import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Rolling from './Components/Rolling'
import Footer from './Components/Footer'
import Middle from './Components/middle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main">
        <Navbar/>
        <Rolling/>
        <div className="speech">
          <p>"Take care of your body. Its the only place you have to live."- Jim Rohn</p>
          <p>"Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship."- Buddha</p>
        </div>
        <h2 className='dh2'>START YOUR JOURNEY</h2>
        <div className="disease">
          <h2 className="dh">KNOW YOUR DISEASE MUCH BETTER....</h2>
          <button className="dbtn">KNOW MORE<i class="fa-solid fa-arrow-right bi"></i></button>
        </div>
        <div className="disease">
          <h2 className="dh">DONATE SOMETHING FOR SOMEONE....</h2>
          <button className="dbtn">DONATE<i class="fa-solid fa-arrow-right bi"></i></button>
        </div>
        <div className="disease">
          <h2 className="dh">FIX YOUR PEACE....</h2>
          <button className="dbtn">START<i class="fa-solid fa-arrow-right bi"></i></button>
        </div>
        <div className="disease">
          <h2 className="dh">EVERY ASSISTANCE IS FREE....</h2>
          <button className="dbtn">GOTO<i class="fa-solid fa-arrow-right bi"></i></button>
        </div>
        <Middle/>
        <Footer/>
      </div>

    </>
  )
}

export default App
