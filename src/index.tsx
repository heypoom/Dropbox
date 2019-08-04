import * as React from 'react'
import {useState, useRef} from 'react'

import ReactDOM from 'react-dom'

function App() {
  const [isActive, setActive] = useState(false)
  const [list, setList] = useState([1])

  const resize = () => setList(list.map(x => x + 1))
  const toggle = () => setActive(!isActive)

  const add = () => {
    const circle = list[list.length - 1] + 1

    setList([...list, circle])
  }

  return (
    <div className="container">
      <button onClick={add}>Add</button>
      <button onClick={resize}>Resize</button>

      <svg onClick={toggle} className="graphic">
        {list.map((d, i) => (
          <circle
            r={d}
            cx={10 + (d + 15) * i}
            cy={200}
            fill={isActive ? 'red' : 'blue'}
          />
        ))}
      </svg>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
