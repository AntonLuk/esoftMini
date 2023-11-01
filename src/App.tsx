import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


    return (
    <>
      <div>
        {/*<a href="https://vitejs.dev" target="_blank">*/}
        {/*  <img src={viteLogo} className="logo" alt="Vite logo" />*/}
        {/*</a>*/}
        {/*<a href="https://react.dev" target="_blank">*/}
        {/*  <img src={reactLogo} className="logo react" alt="React logo" />*/}
        {/*</a>*/}
          <img src={'https://sun9-79.userapi.com/c523423/u192235900/video/l_3a7440bf.jpg'} />
      </div>
      <h1>Внимание</h1>
      <h2>Вопрос</h2>
         <div className="card">
          <h3>Сколько раз ты пидр?</h3>
            <button onClick={() => setCount((count) => count + 1)}>
              Узнать
            </button>
             <h2>{!!count && count}</h2>
        </div>
    </>
  )
}

export default App
