import { createContext, useState } from 'react';
import horoscopes from '../data/horoscopes';

export const HoroscopeContext = createContext();


 const HoroscopeProvider = props => {
    const [currSign, setCurrSign] = useState('Virgo')
    const sign = horoscopes[currSign]
    console.log(props)
    return (
        <HoroscopeContext.Provider value={{sign, setCurrSign}}>
            {props.children}
        </HoroscopeContext.Provider>
    )
}

export default HoroscopeProvider

