import bulbasaur from './images/bulbasaur.jpg'
import './App.css'

export default function Showcase() {
    const favPoke = 'Bulbasaur'
    const pokeChars = {
        move: 'Vine Whip',
        type: 'Grass'
    }

    return (
        <div className='background' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>
                {favPoke}&apos;s Showcase Component
                {' '}
            </h1>
            <img style={{ height: '200px', width: '200px' }} src={bulbasaur} alt="bulbasaur image" />
            <h2>
                <span style={{ backgroundColor: 'green', color: 'white' }}>
                    {favPoke}&apos;s
                </span>
                {' '}
                type is
                {' '}
                <span style={{ backgroundColor: 'white', color: 'green' }}>
                    {pokeChars.type}
                </span>
                {' '}
                and one of their moves is {pokeChars.move}
            </h2>
        </div>
    )
}
