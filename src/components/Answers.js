import CheckboxGroup from './CheckboxGroup'
import Email from './Email'
import RadioGroup from './RadioGroup'
import Range from './Range'
import Select from './Select'

const Answers = ({ question, answers }) => {

  const answerType = question?.node?.answerType
  const questionId = question?.node?.id

  switch (answerType) {
    case 'radio':
      return <RadioGroup answers={answers} questionId={questionId} />
    case 'multiselect':
      return <CheckboxGroup answers={answers} questionId={questionId} />
    case 'measurement':
      return <Select answers={answers} questionId={questionId} />
    case 'slider':
      return <Range answers={answers} name={questionId} />
    case 'email':
      return <Email name={questionId} />
    default: 
      return <RadioGroup answers={answers} questionId={questionId} />
  }
}

export default Answers