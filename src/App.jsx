import { useState } from 'react'
import { Graph } from '#components/index.js';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Graph />
    </main>
  )
}

export default App
