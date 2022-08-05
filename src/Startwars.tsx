import useFetch from './hooks/useFetch';
import {v4 as uuid} from 'uuid'
import Character from './Character';



function Startswars(){
    const {characters ,loading} = useFetch()
    return(
        <>
        {
            loading ?'im loading': characters.map((character)=>{
                return <Character character={character} key={uuid()}/>
            })
        }
        </>
    )
}

export default Startswars