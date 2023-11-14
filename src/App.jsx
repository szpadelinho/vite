import { useState } from 'react'
import './App.css'
import ToDo from './ToDo.jsx'
import ProductForm from './ProductForm.jsx'
import Chopi from './Chopi.jsx'
import Child from './Child.jsx'

function App(){
  const [dataFromChild, setDataFromChild] = useState(null);

  return(
    <>
      {/* <Chopi name="Biegnący z bizonami" age="44"/>
      <Chopi name="Tańczący z wilkami" age="24"/>
      <Chopi name="Chodzący z kotami" age="34"/> */}
      <Child childDataHandler={setDataFromChild}/>
    </>
  )
}

export default App
