import React from 'react'
import './PokeMoveCard.css'

export default function PokeMoveCard({ id, move, type, level }) {
    return (
        <li className='poke-move-card'>
            <h3>Move {id}</h3>
            <h4 style={{ padding: 10 }}>{move.toUpperCase()}</h4>
            <p>Type: {type}</p>
            <p>Level: {level}</p>
        </li>
    )
}
