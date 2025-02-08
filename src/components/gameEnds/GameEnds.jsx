import './gameEnds.css'
import { useAppContext } from '../contexts/Context'
import NewGame from '../buttons/NewGame'

const GameEnds = () => {
     
    const [appState] = useAppContext()

    if (!appState.gameState)
        return

    return(
        <div className='gameEnds'>
            <p className='endMessage'>{appState.gameState}</p>
            <NewGame/>
        </div>
    )
}
export default GameEnds