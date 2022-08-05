import {Icharacter} from './types'
interface Iprops{
    character: Icharacter
}
function Character({character}:Iprops){
    return(
        <div>
            <h1>{character.name}</h1>
        </div>
    )

}

export default Character