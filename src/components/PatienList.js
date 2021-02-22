import { size } from "lodash";
import { useEffect, useState } from "react"
import { getCollection } from "../actions"
import {Link, useParams} from 'react-router-dom'

function PatienList() {
    const [patients, setPatients] = useState([])
    const [patient, setPatient] = useState(null)

  useEffect(() => {
    (async() =>{
      const result = await getCollection("pantient")
      if(result.statusResponse){
        setPatients(result.data)
        setPatient(null)
      }
    })()
  }, [])

 const {name } =  useParams()

  return (
    <div className="PatienList">

        <div className="bg-dark text-white py-3 text-center">
         
         <Link to={'/createPatient'}><button type="button" className="btn btn-success" >Crear Paciente</button></Link>
       </div>

      <div className="container mt-5">
        <h4>Lista Pacientes.</h4>
        <hr />

            {size(patients) == 0 ? (
              <li className="list-group-item">
                Aun no hay pacientes
              </li>
            ) : (
              <table className="table table-dark col">
                <thead>
                    <th scope="col">Nombre mascota</th>
                    <th scope="col">Tipo de mascota</th>
                    <th scope="col">Raza de mascota</th>
                    <th scope="col">Nombre completo</th>
                    <th scope="col">Teléfono propietario</th>
                    <th scope="col">Dirección</th>
                    <th scope="col">Email</th>
                    <th scope="col" style={{ width: '150px'}} >acciones</th>
                </thead>
                <tbody>
                
                {patients.map((pet) => (
                   <tr key={pet.id}>
                   <td >{pet.namePet}</td>
                   <td>{pet.typePet} </td>
                   <td >{pet.race}</td>
                   <td >{pet.fullNameOwner}</td>
                   <td>{pet.phoneOwner} </td>
                   <td >{pet.directionOwner}</td>
                   <td>{pet.emailOwner} </td>
                   <td>
                   <button className="btn btn-danger btn-sm float-right">
                    Eliminar
                  </button>
                  <button className="btn btn-warning btn-sm float-right">
                    Editar
                  </button>
                   </td>
                   </tr>
                ))}
             </tbody>
             </table>
            )}
      </div>
    </div>
  );
}



export default PatienList;
