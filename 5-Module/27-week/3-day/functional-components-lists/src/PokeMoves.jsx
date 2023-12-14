import React from 'react'
import PokeMoveCard from './PokeMoveCard'
import { moves } from './data'

export default function PokeMoves() {
    // let moves
  return (
    <div>
        <h1>PokeMoves</h1>
        <ul>
        {moves && moves.map(item => (
            <PokeMoveCard key={item.id} {...item}/>
        ))}

        </ul>
    </div>
  )
}
