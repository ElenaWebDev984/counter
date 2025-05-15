import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={'container'}>
        <button className={'count'} onClick={() => setCount((count) => count + 1)}>
          {count}
        </button>
        <div className={'btnWrapper'}>
            <button>inc</button>
            <button>reset</button>
        </div>
    </div>
  )
}

export default App
