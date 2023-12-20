import { useContext } from 'react';
import { HoroscopeContext } from '../context/HoroscopeContext';

const Detail = () => {
  const {mySign, setCurrSign} = useContext(HoroscopeContext);
  
  

  return (
    <div className='details'>
      <img
        src={mySign.backgroundImg}
        alt=''
      />
      <h2>{mySign.name}</h2>
      <h4>Element: {mySign.element}</h4>
      <h4>Traits: {mySign.traits}</h4>
    </div>
  );
};

export default Detail;
