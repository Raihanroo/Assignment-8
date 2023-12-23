
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ReadingProvider from './components/Context/ReadingContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

<ReadingProvider>
  <App/>
</ReadingProvider>

  
  
)
