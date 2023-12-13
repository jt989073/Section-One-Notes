import './BaseStats.css'

export default function BaseStats({ stats: { hp, attack, defense, speed }, clicker }) {

    return (
        <div className='base-stats'>
            <button className="sp-stats" onClick={clicker}>
                Check Special Stats
            </button>
            <table >
                <tbody>
                    <tr>
                        <td>Hit Points</td>
                        <td>{hp}</td>
                    </tr>
                    <tr>
                        <td>Attack</td>
                        <td>{attack}</td>
                    </tr>
                    <tr>
                        <td>Defense</td>
                        <td>{defense}</td>
                    </tr>
                    <tr>
                        <td>Speed</td>
                        <td>{speed}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
