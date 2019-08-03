import * as React from 'react'
import {useState, useRef, useEffect} from 'react'

import ReactDOM from 'react-dom'
import * as d3 from 'd3'

function App() {
  const node = useRef(null)
  const [isActive, setActive] = useState(false)
  const [list, setList] = useState([1])

  useEffect(() => {
    d3.select(node.current)
      .selectAll('circle')
      .remove()

    d3.select(node.current)
      .selectAll('circle')
      .data(list)
      .enter()
      .append('circle')
      .attr('r', d => d)
      .attr('cx', (d, i) => 10 + (d + 15) * i)
      .attr('cy', 200)
      .attr('fill', 'blue')
  }, [list])

  function resize() {
    setList(list.map(x => x + 1))
  }

  useEffect(() => {
    d3.select(node.current)
      .selectAll('circle')
      .transition()
      .duration(300)
      .attr('fill', isActive ? 'red' : 'blue')
  }, [isActive])

  const toggle = () => setActive(!isActive)

  const add = () => {
    const circle = list[list.length - 1] + 1

    setList([...list, circle])
  }

  window.setList = setList

  return (
    <div className="container">
      <button onClick={add}>Add</button>
      <button onClick={resize}>Resize</button>

      <svg ref={node} onClick={toggle} className="graphic" />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))

window.d3 = d3
