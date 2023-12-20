import { useState } from 'react'
import Header from './components/Header/Header'
import Tecno from './components/Tecno/Tecno'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Header></Header>
      <Tecno></Tecno>
    </div>
  )
}
export default App
