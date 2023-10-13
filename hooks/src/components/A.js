 import {B} from './B'
 import {useContext} from 'react'
 import {NameContext} from '../App';
 const A = ()=>{
    const name = useContext(NameContext);
    return(
        <>
        <h1>A component</h1>
        <h2>{name}</h2>
        <B/>
        </>
    )
}


export default A


