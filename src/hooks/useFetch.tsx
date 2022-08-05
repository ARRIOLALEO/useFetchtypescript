import {useState,useEffect} from 'react'
import {Icharacter} from '../types'


function useFetch(){
const [characters,setCharacters] = useState<Icharacter[]>([] as Icharacter[]);
const [loading,setLoadings] = useState(false)
useEffect(()=>{
    setCharacters([])
    setLoadings(true)
    fetch('https://star-wars-character-search.glitch.me/api/characters').then(response =>{ 
        return response.json()}).then(response => {
            setLoadings(false)
            setCharacters(response.characters)}).catch(error=> {
                setLoadings(false)
                console.log(error)})
},[])
return {characters,loading}
}
export default useFetch