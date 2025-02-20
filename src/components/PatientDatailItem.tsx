type PatientDatailItemProps ={
    label: string,
    field: string
}
export default function PatientDatailItem({label, field}: PatientDatailItemProps) {
  return (
    <p className="font-bold mb-3 text-indigo-600 uppercase ">
        {label}:{' '}
        <span className="font-normal text-gray-700 normal-case">{field}</span>
    </p> 
    )
}