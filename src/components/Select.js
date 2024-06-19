import { useState, useEffect } from 'react'
import '../index.css';
import useFormContext from '../hooks/useFormContext';

const Select = ({ questionId, answers }) => {

  const { data, handleChange, page } = useFormContext()

  const [selectedValue, setSelectedValue] = useState(answers[0]?.node?.id)

  const icon = answers[0]?.node?.icon

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value)
    handleChange(e)
  }

  useEffect(() => {
    if (data[questionId]) {
      setSelectedValue(data[questionId])
    }
  }, [data, page, questionId])

  return (
    <>
        <select id={questionId} name={questionId} value={selectedValue} onChange={handleSelectChange} className="mt-5 w-fit pr-2 py-1 border-[1px] border-black">
          {answers?.map((answer) => {
            return (
              <option key={answer?.node?.id} value={answer?.node?.id}>{answer?.node?.text}</option>
            )
          })}
        </select>
        {icon && 
          <img className="w-full h-auto object-cover mt-2" src={answers[0]?.node?.icon} alt="Wrist to floor measurement graphic" />
        }
    </>
  )
}

export default Select