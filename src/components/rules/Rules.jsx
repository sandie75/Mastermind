import './rules.css'
const Rules = () => {
    return(
        <div className='rules'>
            <h3>Règles du Mastermind :</h3>
            <p>Le joueur doit deviner le code secret. Il s'agit d'une suite de quatre couleurs choisies parmi six couleurs disponibles (une couleur peut apparaître plusieurs fois). Le joueur propose une combinaison de 4 couleurs. Après chaque tentative, il reçoit un indice sous la forme de pions noirs et blancs : </p>
            <p>- Les pions noirs indiquent une couleur correcte ET à la bonne position.</p>
             <p>- Les pions blancs indiquent une couleur correcte, mais PAS à la bonne position.
            </p>
        </div>
    )
}

export default Rules;