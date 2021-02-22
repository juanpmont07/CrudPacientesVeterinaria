import { size } from "lodash";
import { useEffect, useState } from "react";
import { deleteDocument, getCollection, updateDocument } from "../actions";
import { makeStyles, Modal } from "@material-ui/core";
import { addDocument } from "../actions";

function PatienList() {
  const [patients, setPatients] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [patient, setPatient] = useState({
    namePet: "",
    typePet: "",
    racePet: "",
    birthdatePet: "",
    fullNameOwner: "",
    phoneOwner: "",
    directionOwner: "",
    emailOwner: "",
  });
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [idDelete, setIdDelete] = useState(null);

  const openOrCloseModal = (action) => {
    if (action !== "edit") {
      setEditMode(false);
      setInitValue();
    }

    setError(false);
    setModal(!modal);
  };

  const openOrCloseModalDelete = () => {
    setModalDelete(!modalDelete);
  };

  useEffect(() => {
    (async () => {
      const result = await getCollection("patient");
      if (result.statusResponse) {
        setPatients(result.data);
        setInitValue();
      }
    })();
  }, []);

  const setInitValue = () => {
    setPatient({
      namePet: "",
      typePet: "",
      racePet: "",
      birthdatePet: "",
      fullNameOwner: "",
      phoneOwner: "",
      directionOwner: "",
      emailOwner: "",
    });
  };

  const styleModal = makeStyles((theme) => ({
    modal: {
      position: "absolute",
      width: 400,
      backgroundColor: "white",
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  }));

  //EDIT O CREATE COMPONENT

  const editPet = (pet) => {
    setEditMode(true);
    setPatient(pet);
    openOrCloseModal("edit");
  };

  const deletePet = (id) => {
    setIdDelete(id);
    openOrCloseModalDelete();
  };

  const addPatient = async (e) => {
    e.preventDefault();
    if (!validForm()) {
      return;
    }
    const result = await addDocument("patient", {
      namePet: patient.namePet,
      typePet: patient.typePet,
      racePet: patient.racePet,
      birthdatePet: patient.birthdatePet,
      fullNameOwner: patient.fullNameOwner,
      phoneOwner: patient.phoneOwner,
      directionOwner: patient.directionOwner,
      emailOwner: patient.emailOwner,
    });

    if (!result.statusResponse) {
      return;
    }

    window.location = "/";
  };

  const validForm = () => {
    let isValid = true;
    setError(false);
    if (
      patient.emailOwner === "" ||
      patient.namePet === "" ||
      patient.typePet === "" ||
      patient.racePet === "" ||
      patient.fullNameOwner === "" ||
      patient.phoneOwner === "" ||
      patient.directionOwner === "" ||
      patient.birthdatePet === ""
    ) {
      setError(true);
      isValid = false;
    }

    return isValid;
  };

  const editPatient = async (e) => {
    e.preventDefault();
    if (!validForm()) {
      return;
    }
    const result = await updateDocument("patient", patient.id, {
      namePet: patient.namePet,
      typePet: patient.typePet,
      racePet: patient.racePet,
      birthdatePet: patient.birthdatePet,
      fullNameOwner: patient.fullNameOwner,
      phoneOwner: patient.phoneOwner,
      directionOwner: patient.directionOwner,
      emailOwner: patient.emailOwner,
    });

    if (!result.statusResponse) {
      return;
    }

    window.location = "/";
  };

  const changeValueInput = (event) => {
    setPatient({
      ...patient,
      [event.target.name]: event.target.value,
    });
  };

  const deletePatient = async () => {
    const result = await deleteDocument("patient", idDelete);
    if (!result.statusResponse) {
      return;
    }
    window.location = "/";
  };

  const styles = styleModal();
  const modalCreateOrEdit = (
    <div className={styles.modal}>
      <div className="col-xs-12 container mb-2 p-9">
        <div className="center-block">
          <form
            className="form-group"
            onSubmit={editMode ? editPatient : addPatient}
          >
            <div className="text-center mb-2">
              <h1 className="h5 mb-3 font-weight-normal">
                {editMode ? "Modificar Paciente" : "Agregar Paciente"}
              </h1>
            </div>
            <div className="form-label-group mb-2">
              <input
                type="text"
                name="namePet"
                className="form-control"
                id="namePet"
                placeholder="Nombre mascota"
                onChange={changeValueInput}
                value={patient.namePet}
              />
            </div>

            <div className="form-label-group mb-2">
              <input
                type="text"
                name="typePet"
                className="form-control"
                id="typePet"
                placeholder="Tipo de mascota"
                onChange={changeValueInput}
                value={patient.typePet}
              />
            </div>

            <div className="form-label-group mb-2">
              <input
                type="text"
                name="racePet"
                className="form-control"
                id="racePet"
                placeholder="Raza de mascota"
                onChange={changeValueInput}
                value={patient.racePet}
              />
            </div>

            <div className="form-label-group mb-2">
              <input
                type="date"
                name="birthdatePet"
                className="form-control"
                id="birthdatePet"
                placeholder="fecha de nacimiento mascota"
                onChange={changeValueInput}
                value={patient.birthdatePet}
              />
            </div>

            <div className="form-label-group mb-2">
              <input
                type="text"
                name="fullNameOwner"
                className="form-control"
                id="fullNameOwner"
                placeholder="Nombres y apellidos del propietario"
                onChange={changeValueInput}
                value={patient.fullNameOwner}
              />
            </div>

            <div className="form-label-group mb-2">
              <input
                type="number"
                name="phoneOwner"
                className="form-control"
                id="phoneOwner"
                placeholder="Teléfono del propietario"
                onChange={changeValueInput}
                value={patient.phoneOwner}
              />
            </div>

            <div className="form-label-group mb-2">
              <input
                type="text"
                name="directionOwner"
                className="form-control"
                id="directionOwner"
                placeholder="Dirección del propietario"
                onChange={changeValueInput}
                value={patient.directionOwner}
              />
            </div>

            <div className="form-label-group mb-2">
              <input
                type="email"
                name="emailOwner"
                className="form-control"
                id="emailOwner"
                placeholder="Email del propietario"
                onChange={changeValueInput}
                value={patient.emailOwner}
              />
            </div>
            {error && (
              <div className="alert alert-danger">
                <p>Debe de ingresar todos los campos.</p>
              </div>
            )}
            <button
              type="submit"
              className={
                editMode
                  ? "btn btn-warning btn-block mb-2"
                  : "btn btn-primary btn-block mb-2"
              }
              type="submit"
            >
              {editMode ? "Editar Paciente" : "Agregar Paciente"}
            </button>
            <button
              type="button"
              className="btn btn-danger btn-block"
              onClick={() => openOrCloseModal("back")}
            >
              volver
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  const modalDeleteView = (
    <div className={styles.modal}>
      <div className="col-xs-12 container mb-2 p-9">
        <div className="center-block">
          <div align="center">
              <h5>Seguro que desea eliminar?</h5>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => deletePatient()}
            >
              Si
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={() => openOrCloseModalDelete()}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="bg-dark text-white py-3 text-center">
        <button
          type="button"
          onClick={() => openOrCloseModal("create")}
          className="btn btn-success"
        >
          Crear Paciente
        </button>
      </div>

      <div className="container mt-5">
        <h4>Lista Pacientes</h4>
        <hr />

        {size(patients) === 0 ? (
          <li className="list-group-item">Aun no hay pacientes</li>
        ) : (
          <table className="table table-dark col">
            <thead>
              <tr key={1}>
                <th scope="col">Nombre mascota</th>
                <th scope="col">Tipo de mascota</th>
                <th scope="col">Raza de mascota</th>
                <th scope="col">Fecha nacimiento de mascota</th>
                <th scope="col">Nombre completo</th>
                <th scope="col">Teléfono</th>
                <th scope="col">Dirección</th>
                <th scope="col">Email</th>
                <th scope="col" style={{ width: "150px" }}>
                  Acciones
                </th>
              </tr>
            </thead>

            <tbody>
              {patients.map((pet) => (
                <tr key={pet.id}>
                  <td>{pet.namePet}</td>
                  <td>{pet.typePet} </td>
                  <td>{pet.racePet}</td>
                  <td>{pet.birthdatePet}</td>
                  <td>{pet.fullNameOwner}</td>
                  <td>{pet.phoneOwner} </td>
                  <td>{pet.directionOwner}</td>
                  <td>{pet.emailOwner} </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm float-right"
                      onClick={() => deletePet(pet.id)}
                    >
                      Eliminar
                    </button>
                    <button
                      className="btn btn-warning btn-sm float-right"
                      onClick={() => editPet(pet)}
                    >
                      Editar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <Modal open={modal} onClose={openOrCloseModal}>
        {modalCreateOrEdit}
      </Modal>

      <Modal open={modalDelete} onClose={openOrCloseModalDelete}>
        {modalDeleteView}
      </Modal>
    </div>
  );
}

export default PatienList;
