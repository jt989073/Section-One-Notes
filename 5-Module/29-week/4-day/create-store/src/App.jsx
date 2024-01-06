import './App.css';
import {useSelector} from 'react-redux'

function App() {
  const fruit = useSelector(state => state.fruitState)
  console.log(fruit)
  return <h1> Hello from App </h1>;
}

export default App;
