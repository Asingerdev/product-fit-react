import Quiz from './components/Quiz'
import { useEffect } from "react"
import { FormProvider } from './context/FormContext'
import './index.css'
import ReactGA from "react-ga4";
const TRACKING_ID = process.env.REACT_APP_GA_MEASUREMENT_ID

function App() { 

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);

    ReactGA.event({
      category: 'User',
      action: 'begin_quiz'
  });
}, [])

  return (
    <FormProvider>
      <Quiz />
    </FormProvider>
  );
}

export default App;
