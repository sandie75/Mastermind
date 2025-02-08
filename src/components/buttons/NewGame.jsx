import {useAppContext} from '../contexts/Context'
import {newGame} from '../../reducer/actions'
import './buttons.css'

const NewGame = () => {
    const [,dispatch] = useAppContext()
    
    return <button onClick={() => dispatch(newGame())} className='button'>Nouvelle partie</button>
}
export default NewGame 