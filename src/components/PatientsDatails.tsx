import { Patient } from "../types"
import PatientDatailItem from "./PatientDatailItem"
import { usePatientStore } from "../store/store"
import { toast } from "react-toastify"

type PatientsDatailsProps ={
    patient: Patient
}   

export default function PatientsDatails({patient}: PatientsDatailsProps) {
    const {deletePatient, getPatientById} = usePatientStore()

    const handleClick = (id: Patient['id']) =>{
        deletePatient(id)
        toast.error('Paciente eleminado')
    }
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
        <PatientDatailItem
        label={'ID'}
        field={patient.id}
        />

        <PatientDatailItem
        label={'Nombre'}
        field={patient.name}
        />

        <PatientDatailItem
        label={'Propietario'}
        field={patient.caretaker}
        />

        <PatientDatailItem
        label={'Email'}
        field={patient.email}
        />

        <PatientDatailItem
        label={'Fecha'}
        field={patient.date.toString()}
        />

        <PatientDatailItem
        label={'Sintomas'}
        field={patient.symptoms}
        />

        <div className="flex flex-col md:flex-row gap-3 justify-between mt-10">
            <button 
            type="button"
            onClick={() => getPatientById(patient.id)}
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg">
                Editar
            </button>

            <button 
            onClick={() => handleClick(patient.id)}
            type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg">
                Eliminar
            </button>
        </div>

    </div>
  )
}
