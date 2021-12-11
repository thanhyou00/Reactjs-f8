
import { useState, memo } from 'react'
import Content from './Content';

// 1. memo() -> Higher Order Component (HOC)
// 2. useCallback()

// Hooks
// HOC
// Render props

function App() {
  const [count, setCount] = useState(0);
  const increase = ()=>{
    setCount(count + 1);
  }

  return (
    <div style={{padding: '10px 32px'}}>
      <Content />
      <h1>{count}</h1>
      <button onClick={increase}>Click me !</button>
    </div>
  )

}

export default App;
