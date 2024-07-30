import Quiz from './components/Quiz'
import { FormProvider } from './context/FormContext'
import './index.css'

function App() { 
  return (
    <FormProvider>
      <Quiz />
    </FormProvider>
  );
}

export default App;
