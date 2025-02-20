export type Patient ={
    id: string,
    name: string,
    caretaker: string,
    email: string,
    date: Date,
    symptoms: string
}// para cuando ya esta validado

export type DraftPatient = Omit<Patient, 'id'> // para hacer la validacion    