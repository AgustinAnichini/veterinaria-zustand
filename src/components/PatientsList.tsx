import { usePatientStore } from "../store/store"
import PatientsDatails from "./PatientsDatails"

export default function PatientsList() {

  const {patients} = usePatientStore()
  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      {patients.length ? (
        <>
          <h2 className="font-black text-center text-3xl">Listado de Pacientes</h2>
          <p className="text-xl mb-10 mt-5 text-center">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">Pacientes y Citas.</span>
          </p>

          {patients.map(patient => (
            <PatientsDatails
            key={patient.id}
            patient={patient}
            />
          ))}

        </>
      ):
      <>
        <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
        <p className="text-xl mt-5 mb-10 text-center">
          Comienza agregando Pacientes {''}
          <span className="text-indigo-600 font-bold">y apareceran aqui.</span>
        </p>
      </>
    }
    </div>
  )
}
