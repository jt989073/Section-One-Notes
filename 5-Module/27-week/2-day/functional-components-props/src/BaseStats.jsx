import './BaseStats.css'

export default function BaseStats(props) {
    console.log(props.children)

    return (
        <div className='base-stats'>
            <button className="sp-stats" onClick={props.stats.clicker}>
                Check Special Stats
            </button>
            <table >
                <tbody>
                    <tr>
                        <td>Hit Points</td>
                        <td>{props.stats.hp}</td>
                    </tr>
                    <tr>
                        <td>Attack</td>
                        <td>{props.stats.attack}</td>
                    </tr>
                    <tr>
                        <td>Defense</td>
                        <td>{props.stats.defense}</td>
                    </tr>
                    <tr>
                        <td>Speed</td>
                        <td>{props.stats.speed}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
