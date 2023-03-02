import './App.css'
import ChildA from './components/ChildA'
import { useSelector } from 'react-redux'

function App() {
  const count = useSelector((c) => {
    return c.show.value;
  })
    return(
      <>
        <h1>Parent - {count} </h1>
        <ChildA />
      </>
    )
}

export default App
