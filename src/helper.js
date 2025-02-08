import { colorOptions, tries } from "./constants.js"

export const initGameState = () => ({
    currentRow : 0,
    currentColor: colorOptions[0],
    rows: new Array(tries).fill().map(_=> ['','','','']),
    hints: new Array(tries).fill().map(_=> ['','','','']),
    secret: new Array(4).fill().map(_=> colorOptions[Math.floor (colorOptions.length * Math.random())]),
    gameState : ''
})

export const checkGameState = (hints, row) => {
    if (row === -1)
        return ''
    if (row === 9 && hints.some(x => x !== 'black'))
        return 'Perdu.'
    if (hints[row].every(x => x === 'black'))
        return 'Bravo, c\'est gagné !'
}

export const getHints = (secret,row) => {
    const secretCopy = [...secret]
    const rowCopy = [...row]
    const hints = []

    for (let i =3; i >= 0; i--){
        if (secretCopy[i] === rowCopy[i]){
            hints.push('black')
            secretCopy.splice(i,1)
            rowCopy.splice(i,1)
        }
    }

    for (let i = secretCopy.length; i >= 0; i--){
        const j = rowCopy.indexOf(secretCopy[i])
        if (j !== -1){
            hints.push('white')
            secretCopy.splice(i,1)
            rowCopy.splice(j,1)
        }
    }

    return new Array(4).fill('').map((x,i) => hints[i] || '')
}


//initGameState n'est pas un composant, c'est une fonction utilitaire destinée à initialiser l'état du jeu -> en camelCase.