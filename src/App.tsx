import { useState } from 'react'
import {Button} from "./Button.tsx";


function App() {
  const [count, setCount] = useState(0)
    const maxCount = 5

    const increment = () => {
        if (count < maxCount) {
            setCount(count + 1)
        }
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <div className={'container'}>
            <Button className={`count ${count === maxCount ? 'max' : ''}`}>
                {count}
            </Button>
            <div className={'btnWrapper'}>
                <Button
                    onClick={increment}
                    disabled={count === maxCount}
                >increment
                </Button>
                <Button
                    onClick={reset}
                    disabled={count === 0}
                >reset
                </Button>
            </div>
        </div>
    )
}

export default App
