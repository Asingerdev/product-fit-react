import ProgressBar from './ProgressBar';
import Form from './Form'
import Results from './Results';
import useFormContext from '../hooks/useFormContext';
import '../index.css'

function Quiz() {

  const { isSubmitted } = useFormContext()

  return (
    <div className="quiz-wrapper">
      {isSubmitted ? 
        <Results />
        :
        <>
          <ProgressBar />
          <Form />
        </>
        }
    </div>
  );
}

export default Quiz;
