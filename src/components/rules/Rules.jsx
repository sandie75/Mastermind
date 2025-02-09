import './rules.css'
const Rules = () => {
    return(
        <div className='rules'>
            <h3>Règles du Mastermind :</h3>
            <p>Le joueur doit deviner le code secret. Il s'agit d'une séquence de 4 pions colorés choisis parmi six couleurs disponibles. Le joueur propose une série de 4 couleurs. Après chaque tentative, il reçoit un indice sous la forme de pions noirs et blancs : </p>
            <p>- Les pions noirs sont de la bonne couleur ET à la bonne position.</p>
             <p>- Les pions blancs sont de la bonne couleur, mais PAS à la bonne position.
            </p>
        </div>
    )
}

export default Rules;