import Quiz from './components/Quiz'
import { FormProvider } from './context/FormContext'
import GoogleAnalytics from "./components/GoogleAnalytics";
import './index.css'

function App() { 
  return (
    <FormProvider>
      <GoogleAnalytics />
      <Quiz />
    </FormProvider>
  );
}

export default App;
