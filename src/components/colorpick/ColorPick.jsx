
import './colorpick.css'
import {colorOptions} from '../../constants.js'
import Circle from '../circle/Circle'
import {useAppContext} from '../contexts/Context'
import {setColor} from '../../reducer/actions.js'

const ColorPick = () => {
    const [appState,dispatch] = useAppContext()

    return (
        <div className='colorpick'>
            {colorOptions.map (color => 
            <div className ='item'>
                <Circle 
                    className={appState.currentColor === color ? 'active' : ''}
                    color={color}
                    onClick={() => dispatch(setColor(color))}
                />
            </div>)}
        </div>
    )
}

export default ColorPick

/*ColorPick est un composant fonctionnel React qui génère une liste d'éléments basés sur colorOptions, un tableau contenant des couleurs. Chaque couleur du tableau est passée comme prop au composant Circle.

Rq: En React, si un composant est exporté par défaut, il faut l'importer sans les accolades. Les accolades sont pour les exports nommés.*/