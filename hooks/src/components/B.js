import {useContext} from 'react'
import {NameContext} from '../App';
const B = ()=>{
    const name = useContext(NameContext);
    return(
        <>
        <h1>B component</h1>
        <h2>{name}</h2>
        </>
    )
}
export {B}


