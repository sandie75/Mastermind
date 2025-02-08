import {useAppContext} from '../contexts/Context'
import {checkRow} from '../../reducer/actions'
import {getHints} from '../../helper'
import './buttons.css'

const Check = () => {
    const [{currentRow,rows,secret},dispatch] = useAppContext()
    
    const isRowComplete = currentRow === 10 ? false : rows[currentRow].every(x => x)

    const onCheck = () => {
        const hints = getHints(secret,rows[currentRow])
        dispatch(checkRow(hints))
    }
    
    return <button disabled={!isRowComplete} onClick={onCheck} className='button'>Vérifier</button>
}
export default Check