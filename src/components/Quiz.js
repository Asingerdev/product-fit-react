import ProgressBar from './ProgressBar';
import Form from './Form'
import Results from './Results';
import { useEffect } from "react"
import useFormContext from '../hooks/useFormContext';
import '../index.css'
import ReactGA from 'react-ga4';

const trackingId = 'G-DBKR5RNKLT'
ReactGA.initialize(trackingId);

function Quiz() {

  useEffect(() => {
    ReactGA.event({
      category: 'User',
      action: 'Started quiz'
    });
  }, []);

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
