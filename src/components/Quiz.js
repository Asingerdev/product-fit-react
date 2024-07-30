import ProgressBar from './ProgressBar';
import Form from './Form'
import Results from './Results';
import { useEffect } from "react"
import useFormContext from '../hooks/useFormContext';
import '../index.css'

function Quiz() {

  useEffect(() => {
    window.dataLayer.push({'event': 'started_quiz'})
  }, [])

  const { isSubmitted } = useFormContext()

  return (
    <div className="quiz-container">
      {isSubmitted ? 
        <div className="results-wrapper">
          <Results />
        </div>
        :
        <div className="quiz-wrapper">
          <ProgressBar />
          <Form />
        </div>
        }
    </div>
  );
}

export default Quiz;
