import { useState, useEffect } from 'react'
import Radio from './Radio'
import '../index.css';
import useFormContext from '../hooks/useFormContext';

const RadioGroup = ({ questionId, answers }) => {

  const { data, handleChange, page } = useFormContext()
  const [radioValue, setRadioValue] = useState('')

  const changeSelection = (e) => {
    setRadioValue(e.target.value)
    handleChange(e)
  }

  useEffect(() => {
    setRadioValue(data[questionId])
  }, [data, page, questionId])

  return (
    <fieldset id={questionId} className="quiz-radio-group w-full flex flex-wrap gap-x-10 gap-y-5 mt-5">
      {answers?.map((answer) => {
        return (
          <Radio
            key={answer?.node?.id}
            icon={answer?.node?.icon}
            answer={answer}
            value={answer?.node?.id}
            name={questionId}
            changeSelection={changeSelection}
            checked={radioValue === answer?.node?.id}
            />
        )
      })}
    </fieldset>
  )
}

export default RadioGroup