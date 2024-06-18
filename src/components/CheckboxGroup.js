import { useState, useEffect } from 'react'
import Checkbox from './Checkbox'
import '../index.css';
import useFormContext from '../hooks/useFormContext';

const CheckboxGroup = ({ questionId, answers }) => {

  const { data, handleCheckboxChange, page } = useFormContext()
  const [checkedState, setCheckedState] = useState(
    new Array(answers?.length).fill(false)
  )

  const updateCheckStatus = (position) => {
    const updatedCheckedState = checkedState.map((item, index) => 
      index === position ? !item : item
    )

    setCheckedState(updatedCheckedState) 

    const answerIds = answers.map((answer, i) => {
      return updatedCheckedState[i] ? answer?.node?.id : ''
    })

    handleCheckboxChange(questionId, answerIds)
  }

  useEffect(() => {
    if (data[questionId]?.length > 0 && data[questionId].some(x => x)) {
      const updatedCheckedState = data[questionId].map((item, index) => 
        data[questionId][index] ? true : false
      )

      setCheckedState(updatedCheckedState) 
    }
  }, [data, page, questionId])

  return (
    <fieldset id={questionId} className="quiz-checkbox-group w-full flex flex-wrap gap-x-10 gap-y-5 mt-5">
      {answers?.map((answer, index) => {
        return (
          <Checkbox
            key={answer?.node?.id}
            icon={answer?.node?.icon}
            answer={answer}
            checkHandler={() => updateCheckStatus(index)}
            checked={checkedState[index]}
            />
        )
      })}
    </fieldset>
  )
}

export default CheckboxGroup