import { isEmpty } from "lodash";
import { useState } from "react";
import { Link } from "react-router-dom";

function CreatePatient() {
  const [patient, setPatient] = useState({
    id: "",
    namePet: "",
    typePet: "",
    race: "",
    fullNameOwner: "",
    phoneOwner: "",
    directionOwner: "",
    emailOwner: "",
  });
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false)

  const addPatient = async (e) => {
    e.preventDefault();
    if (!validForm()) {
      return;
    }

       
    /*const result = await addDocument("tasks", {name: task})
        if(!result.statusResponse){
          
           return
        }
        */
  };

  
  const editPatient = async (e) => {
    e.preventDefault();
    if (!validForm()) {
      return;
    }

       
    /*const result = await addDocument("tasks", {name: task})
        if(!result.statusResponse){
          
           return
        }
        */
  };


  const validForm = () => {
    let isValid = true;
    if (isEmpty(patient)) {
      isValid = false;
    }

    return isValid;
  };

  const changeValueInput = (event) => {
    setPatient({
        ...patient,
        [event.target.name] : event.target.value
    })
}

  return (
    <div className="col-xs-12 container mb-4 p-9">
      <div className="center-block">
        <form className="form-group" onSubmit={editMode ? editPatient : addPatient}>
          <div className="text-center mb-4">
               <h1 className="h3 mb-3 font-weight-normal">{ editMode ? "Modificar Paciente" : "Agregar Paciente"}</h1>
          </div>
          <div className="form-label-group mb-4">
            <input
              name="namePet"
              className="form-control"
              id="namePet"
              placeholder="Nombre mascota"
              onChange={changeValueInput}
            />
            {patient.namePet == "" && error && (
              <div className="alert alert-danger">
                <p>Error en el Campo</p>
              </div>
            )}
          </div>

          <div className="form-label-group mb-4">
            <input
              name="typePet"
              className="form-control"
              id="typePet"
              placeholder="Tipo de mascota"
              onChange={changeValueInput}
            />
            {patient.typePet == "" && error && (
              <div className="alert alert-danger">
                <p>Error en el Campo</p>
              </div>
            )}
          </div>

          <div className="form-label-group mb-4">
            <input
              name="race"
              className="form-control"
              id="race"
              placeholder="Raza de mascota"
              onChange={changeValueInput}
            />
            {patient.race == "" && error && (
              <div className="alert alert-danger">
                <p>Error en el Campo</p>
              </div>
            )}
          </div>

          <div className="form-label-group mb-4">
            <input
              name="fullNameOwner"
              className="form-control"
              id="fullNameOwner"
              placeholder="Nombres y apellidos del propietario"
              onChange={changeValueInput}
            />
            {patient.fullNameOwner == "" && error && (
              <div className="alert alert-danger">
                <p>Error en el Campo</p>
              </div>
            )}
          </div>

          <div className="form-label-group mb-4">
            <input
              name="phoneOwner"
              className="form-control"
              id="phoneOwner"
              placeholder="Teléfono del propietario"
              onChange={changeValueInput}
            />
            {patient.phoneOwner == "" && error && (
              <div className="alert alert-danger">
                <p>Error en el Campo</p>
              </div>
            )}
          </div>

          <div className="form-label-group mb-4">
            <input
              name="directionOwner"
              className="form-control"
              id="directionOwner"
              placeholder="Dirección del propietario"
              onChange={changeValueInput}
            />
            {patient.directionOwner == "" && error && (
              <div className="alert alert-danger">
                <p>Error en el Campo</p>
              </div>
            )}
          </div>

          <div className="form-label-group mb-4">
            <input
              name="emailOwner"
              className="form-control"
              id="emailOwner"
              placeholder="Email del propietario"
              onChange={changeValueInput}
            />
            {patient.emailOwner == "" && error && (
              <div className="alert alert-danger">
                <p>Error en el Campo</p>
              </div>
            )}
          </div>
          <button type="submit" className={editMode ?"btn btn-lg btn-warning btn-block mb-4":"btn btn-lg btn-primary btn-block mb-4"} type="submit">
               {editMode ?  "Editar Paciente": "Agregar Paciente"}
          </button>
          <Link to={'/'}><button type="submit" className="btn btn-lg btn-danger btn-block">
            volver
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default CreatePatient;
