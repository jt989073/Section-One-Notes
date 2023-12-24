import horoscopeObj from '../data/horoscopes';

const Navbar = (props) => {
  const horoscopes = Object.keys(horoscopeObj);
  
  console.log(props.children)
  return (
    <nav>
      {horoscopes.map(sign => (
        <span key={sign}>{sign}</span>
      ))}
    </nav>
  );
};

export default Navbar;
