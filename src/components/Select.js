import { useState, useEffect } from 'react'
import '../index.css';
import useFormContext from '../hooks/useFormContext';

const Select = ({ questionId, answers }) => {

  const { data, handleChange, page } = useFormContext()

  const [selectedValue, setSelectedValue] = useState(answers[0]?.node?.id)

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
    <select id={questionId} name={questionId} value={selectedValue} onChange={handleSelectChange} className="mt-5">
      {answers?.map((answer) => {
        return (
          <option value={answer?.node?.id}>{answer?.node?.text}</option>
        )
      })}
    </select>
  )
}

export default Select