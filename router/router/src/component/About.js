import { useSearchParams, useNavigate } from "react-router-dom";

const About = ()=>{
    const [search, setSearch] = useSearchParams();
    const navigate = useNavigate();
    const nav = ()=>{
        navigate('/')
          
    }
    return(
        <>
        <h1>About us</h1>
        <button onClick={nav}>Get Search</button>
        </>
    )}

export default About;