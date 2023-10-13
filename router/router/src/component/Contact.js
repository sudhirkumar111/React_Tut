import { useParams } from "react-router-dom";

const Contact = ()=>{

    const {name} = useParams();
    
    return(
        <>
        <h1>Contact us</h1>
        <p>Welcome, {name}</p>
        </>
    )


}


export default Contact;