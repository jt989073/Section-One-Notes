import {Navigate, useNavigate} from 'react-router-dom'

function Stocks() {
  const navigate = useNavigate()
  const isLoggedIn = true

  if(!isLoggedIn) return <Navigate to='/not-logged-in'/>

  const handleSubmit = () => {
    //do some submit logic
    window.alert('hey we clicked a button')
    navigate('/')
  }

  return (
    <div className='comp orange'>
      <h1>Stocks Component</h1>
      <button onClick={handleSubmit}>Click me!</button>
    </div>
  );
}

export default Stocks;
