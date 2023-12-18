import PokeMoveCard from './PokeMoveCard.jsx'
import {moves} from './data.js'

export default function PokeMoves() {
  return (
    <div>
        <h1>
            PokeMoves
        </h1>
        <ul>
            {moves && moves.map(item => (
               <PokeMoveCard key={item.id} {...item}/>
            )) }
        </ul>
    </div>
  )
}
