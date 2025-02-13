import './rows.css'
import Circle from '../circle/Circle'
import {useAppContext} from '../contexts/Context'
import {setSlot} from '../../reducer/actions.js'

const Rows = () => {
    const [appState, dispatch] = useAppContext()
    const {currentRow, rows, hints} = appState

    const onClick = col => dispatch(setSlot(col))
    
    return <div className = "rows">
            {
                new Array(10).fill()
                .map((x,i) => 
                <div className ={`row ${i===currentRow ? 'active' : ''}`} key={i}>
                    
                    <div className='circles'>
                       <Circle color={rows[i][0]} onClick={() => onClick(0)}/>
                       <Circle color={rows[i][1]} onClick={() => onClick(1)}/>
                       <Circle color={rows[i][2]} onClick={() => onClick(2)}/>
                       <Circle color={rows[i][3]} onClick={() => onClick(3)}/>
                    </div>
                    <div className='hints'>
                        <Circle color={hints[i][0]}/>
                        <Circle color={hints[i][1]}/>
                        <Circle color={hints[i][2]}/>
                        <Circle color={hints[i][3]}/>
                        
                    </div>
                </div>)
            }

        </div>
}

export default Rows

/*new Array(10).fill() : Cette expression crée un tableau de 10 éléments. La méthode .fill() le remplit avec des valeurs undefined. Ensuite, on peut mapper sur ce tableau pour créer des éléments dynamiques.

.map((x, i) => <div className="row" key={i}>{i + 1}</div>) : Utilise la méthode .map() pour parcourir chaque élément du tableau. Ici :

- x représente l'élément actuel (qui sera toujours undefined à cause du .fill()).
- i est l'index de l'élément, utilisé comme contenu du div et pour attribuer une key unique à chaque élément.
- Chaque itération crée une div avec la classe "row" et un contenu qui affiche l'index (i + 1 pour afficher les nombres de 1 à 10).

key={i} : En React, chaque élément dans une liste doit avoir une key unique pour optimiser le rendu. Ici, on utilise l'index i comme clé, ce qui est correct dans ce cas puisque les éléments ne sont pas réordonnés ou modifiés dynamiquement.

numbers of every row : <div>{i+1}</div> */ 