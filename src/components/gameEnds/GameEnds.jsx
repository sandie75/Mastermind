import './gameEnds.css'
import { useAppContext } from '../contexts/Context'
import NewGame from '../buttons/NewGame'
import confetti from 'canvas-confetti';

const GameEnds = () => {
     
    const [appState] = useAppContext()

    const celebrateVictory = () => {
        confetti({
            particleCount: 200,
            spread: 120, 
            origin: { y: 0.6 } // Position (plus bas = explosion du bas)
        });
    };

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

/* appState, défini plus haut, vient du contexte global de l'application, défini dans Context.jsx 
Le code avec les messages à afficher en cas de victoire est dans helper.jsx.*/