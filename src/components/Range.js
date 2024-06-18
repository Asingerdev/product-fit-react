import { useState, useEffect } from 'react'
import useFormContext from '../hooks/useFormContext';
import '../index.css';

const Range = ({ answers, name }) => {

  // Set range minmax
  const min = 20
  const max = 70
  
  const [rangeValue, setRangeValue] = useState(min)

  const { data, page, handleRangeChange } = useFormContext()

  const handleLocalRangeChange = (e) => {
    setRangeValue(e.target.value)

    // Set form value for range to answer ID

    const step = (e.target.value - min) / 10
    const answerId = answers[step]?.node?.id

    handleRangeChange(e, answerId)
  }

  useEffect(() => {
    if (data[name]) {
      const answerIndex = answers.findIndex(answer => answer?.node?.id === data[name])
      const newValue = (answerIndex * 10) + min

      setRangeValue(newValue)
    }
  }, [data, page, name, answers])
  
  return (
    <div className="mt-5">
      <span>{rangeValue === 70 ? `${max}+` : `${rangeValue}s`}</span>
      <input className="w-full mt-1 accent-slate-200" type="range" step="10" id={`question-${name}-range`} name={name} min={min} max={max} value={rangeValue} onChange={handleLocalRangeChange}  />
      <div className="w-full flex justify-between text-gray-500">
        <span>{`${min}s`}</span>
        <span>{`${max}+`}</span>
      </div>
    </div>
  )
}

export default Range