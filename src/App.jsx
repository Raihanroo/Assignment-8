import { useState } from 'react'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Header name={'sakil'}></Header>
    </div>
  )
}
export default App
