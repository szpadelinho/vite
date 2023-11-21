import { useState } from 'react'
import './App.css'
import ToDo from './ToDo.jsx'
import ProductForm from './ProductForm.jsx'
import Chopi from './Chopi.jsx'
import Child from './Child.jsx'

const Student = ({student}) =>{
  console.log(student)
  return(
    <div>
      <h2>Imię: {student.name}</h2>
      <p>Klasa: {student.grade}</p>
    </div>
  )
}

const StudentList = () => {
  const students = [
    {
      id: 1,
      name: "Zygfryd",
      grade: 4
    },
    {
      id: 2,
      name: "Paris",
      grade: 5
    },
    {
      id: 3,
      name: "Gniewomir",
      grade: 8
    },
    {
      id: 4,
      name: "Szymonek",
      grade: 1
    }
  ]
  return(
    <div>
      {students.map(uczen => (<Student key={uczen.id} student={uczen}/>))}
    </div>
  )
}

function App(){
  //const [dataFromChild, setDataFromChild] = useState(null);

  return(
    <>
      {/* <Chopi name="Biegnący z bizonami" age="44"/>
      <Chopi name="Tańczący z wilkami" age="24"/>
      <Chopi name="Chodzący z kotami" age="34"/> */}
      {/* <Child childDataHandler={setDataFromChild}/>
      {
        dataFromChild && <h3>{dataFromChild} !!</h3>
      } */}
      {/* <Student student={{name: "Bartek", grade: "IIB"}}/> */}
      <StudentList/>
    </>
  )
}

export default App
