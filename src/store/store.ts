// aca vamos a tener el state y las acciones
import {create} from 'zustand'
import { DraftPatient, Patient } from '../types'
import {v4 as uuidv4} from 'uuid'
import {devtools, persist} from 'zustand/middleware'

type PatientState = {
    patients: Patient[]
    addPatient: (data: DraftPatient) => void
    deletePatient: (id: Patient['id']) => void
    activatedID: Patient['id']
    getPatientById: (id: Patient['id']) => void
    updatePatient: (data: DraftPatient) => void
}// define el type del Store

const createPatient = (patient: DraftPatient): Patient => {
    const newPatient = {
        ...patient, 
        id: uuidv4()
    }
    return newPatient
}

export const usePatientStore = create<PatientState>() (
    devtools (
        persist((set)=> ({
        // aca va el STATE y FUNCIONES
        patients: [],
        addPatient: (data) =>{
            set((state) => ({
                patients: [...state.patients, createPatient(data)]
            }))
        },
        deletePatient: (id) =>{
            set((state)=> ({
                patients: state.patients.filter(patient => patient.id !== id )
            }))
            
        },
        activatedID: '',
        getPatientById: (id) => {
            set(()=> ({
                activatedID: id
            }))
        },
        updatePatient: (data) =>{
            set((state)=> ({
                patients: state.patients.map(patient => patient.id === state.activatedID ? 
                    {id: state.activatedID, ...data } : patient ),
                    activatedID: ''
            }))
        }   
    }), {
        name:'patients-storage'
    })
))