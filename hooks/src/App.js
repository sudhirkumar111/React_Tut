import './App.css';
import {useState,createContext} from 'react';
import A from './components/A'
import {B} from './components/B'
import UseRefHook from './components/UseRefHook';
import UseMemoHook from './components/UseMemoHook'



const NameContext = createContext();

function App() {
  const [name,setName] = useState('Ashish');
  return (
    <div className="App">

    {/* <h1>Hi, {name} Welcome to Hooks Tutorial</h1>
    <button onClick={()=> setName('Sudhir')}>Update Name</button> */}
    {/* <NameContext.Provider value={name}>
    <A/>
    </NameContext.Provider> */}
    {/* <UseRefHook/> */}
    <UseMemoHook/>
    </div>
  );
}

export {App,NameContext} ;
