import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Recepies from './component/Recepies';
import  { useEffect, useState } from 'react';
import Axios from "axios";


function App() {
  // useEffect(()=>{
  //   console.log("app init");
  // })
  const [search,setSearch]=useState("chicken")
  const[recipes,setRecipes]=useState([])
  const APP_ID="32bff0e6"
  const APP_KEY="37d756f1c75fb9ca30966a4661ce665d" 
  useEffect(()=>{
    getrece()
    // const result=await Axios.get(` https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    // console.log(result);
    // setRecipes(result.data.hits);
  },[])
  const getrece=async()=>{
    const result=await Axios.get(` https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    console.log(result);
    setRecipes(result.data.hits);
    
  }
  
  
 
  const onInputchange=e=>{
    setSearch(e.target.value);
  }
  return (
    <>
    <div className="app">
      
    <Header search={search} onInputchange={onInputchange} />
    <Recepies recepies={recepies}/>
    


    </div>
    </>
    
    
  )
}

export default App;
