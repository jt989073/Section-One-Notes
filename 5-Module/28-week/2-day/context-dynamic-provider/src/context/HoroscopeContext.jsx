import { createContext, useState } from 'react';
import horoscopes from '../data/horoscopes';
export const HoroscopeContext = createContext();


const HoroscopeProvider = props => {
    const [currSign, setCurrSign] = useState('Virgo')
    const mySign = horoscopes[currSign]

    return (
        <HoroscopeContext.Provider value={{mySign, setCurrSign}}>
            {props.children}
        </HoroscopeContext.Provider>
    )
}

export default HoroscopeProvider