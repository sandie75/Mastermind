import './circle.css'

const Circle = ({color,className,onClick}) => {
    return <div
        className = {`circle ${color || 'transparent'} ${className || ''}`}
        onClick={onClick}
    />
}

export default Circle

/*Rq : on peut écrire une balise div autofermante en jsx si c'est une balise sans contenu.*/ 