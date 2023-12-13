import bulbasaur from './images/bulbasaur.jpg'
import './Showcase.css'


function Showcase() {
    const favPoke = 'Bulbasaur'

    const pokeCharacteristics = {
        move: 'Vine Whip',
        type: 'grass'
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>{favPoke}&apos;s Showcase Component</h1>
            <img className='words' alt='bulbasaur image' src={bulbasaur} />
            <h2>
                {favPoke}&apos;s favorite move is
                <span style={{ backgroundColor: 'green', color: 'white' }}>
                    {pokeCharacteristics.move}
                </span>
                {' '} and type is {' '} <span style={{ backgroundColor: 'green', color: 'white' }}>
                    {pokeCharacteristics.type}
                </span>
            </h2>
        </div>
    );
}

export default Showcase;