import {useState,useRef} from 'react'
const UseRefHook = ()=>{
    const [name,setName] = useState('');
    const refName = useRef('');
    console.log(refName)

    const handleRef =()=>{
        refName.current.focus()
        refName.current.value="sudhir"
        console.log(refName.current.value)

    }
    return(
        <>
        <h1>UseRefHook component</h1>
        {/* <button onClick={()=>setName("sudhir")}>state</button> <span>{name}</span>
        <button onClick={()=>refName.current='Asish'}>useRef</button> <span>{refName.current}</span> */}

        <input type="text" ref={refName}></input>
        <button onClick={handleRef}>focus</button>

        
        </>
    )
}


export default UseRefHook
