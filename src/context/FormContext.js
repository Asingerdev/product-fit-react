import { createContext, useState, useEffect } from "react"
import fetchQuiz from '../services/quiz'
import fetchRecommendedProducts from "../services/recommendedProducts"
import saveSelections from "../services/saveSelection"
import calculateLieAngle from "../services/calculateLieAngle"
import { trackGAEvent } from "../utils/google-analytics";

const FormContext = createContext({})

export const FormProvider = ({ children }) => {

  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState([])
  const [email, setEmail] = useState('')
  const [quizId, setQuizId] = useState('')
  const [recommendedProducts, setRecommendedProducts] = useState([])
  const [customizations, setCustomizations] = useState([])
  const [lieAngle, setLieAngle] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [page, setPage] = useState(0)
  const [data, setData] = useState({})

  // Fetch quiz by slug and store quiz questions
  const getQuiz = async () => {
    setLoading(true)

    const response = await fetchQuiz(process.env.REACT_APP_QUIZ_SLUG)

    setLoading(false)

    if (!response) return

    const quiz  = { ...response }

    if (quiz) {
      const quizId = quiz?.id
      setQuizId(quizId)
      const questions = quiz?.questions?.edges
      setQuestions(questions)
        // Spread question ID's into initial state
        questions.forEach(question => {
            setData(prevData => ({
                ...prevData,
                [question?.node?.id]: ''
            }))

        })
    }
  }

  useEffect(() => {
    getQuiz();
  }, []);

    const handleChange = e => {
        const name = e.target.name
        const value = e.target.value

        setData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleRangeChange = (e, value) => {
        const name = e.target.name

        setData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleCheckboxChange = (name, array) => {
        setData(prevData => ({
            ...prevData,
            [name]: array
        }))
    }

    const currentQuestionId = questions[page]?.node?.id

    const canSubmit = page === questions.length - 1

    const disablePrev = page === 0

    const disableNext =
        (page === questions.length - 1) || !data[currentQuestionId]

    const checkboxDisableNext = 
        questions[page]?.node?.answerType === 'multiselect' && data[currentQuestionId]?.length < 3

    const prevHide = page === 0 && "remove-button"

    const nextHide = page === questions.length - 1 && "remove-button"

    const submitHide = page !== questions.length - 1 && "remove-button"

    const handleSubmit = async (e) => {
        e.preventDefault()

        const answerIds = Object.values(data)

        const customizations = questions.map((question, ix) => {
            const answer = question?.node?.answers?.edges.find(answer => answer?.node?.id === answerIds[ix])
            return answer?.node?.customization ? answer?.node?.customization : ''
        })

        // Send email to Klaviyo
        const fittingCustomization = customizations.filter(e => e).join(', ')

        const klaviyoData = {
            g: process.env.REACT_APP_KLAVIYO_LIST_ID,
            email: email ?? '',
            "$fields": "$fitting_customization",
            "$fitting_customization": fittingCustomization ?? '',
        }

        const urlData = new URLSearchParams(klaviyoData)
        fetch(`https://manage.kmail-lists.com/ajax/subscriptions/subscribe`, {
            method: 'POST',
            body: urlData,
          }).then((response) => response.json()).then((res) => console.log(res))
        
        const selectedQuestions = questions?.filter(question => question?.node?.resultType === 'age' || question?.node?.resultType === 'gender' || question?.node?.resultType === 'handicap')

        const selectedAnswerIds = selectedQuestions?.map(question => data[question?.node?.id])

        setLoading(true)

        const response = await fetchRecommendedProducts(selectedAnswerIds)

        if (!response) return

        const parsedResponse  = { ...response }
        const recommendedProducts = Object.values(parsedResponse)

        setRecommendedProducts(recommendedProducts)

        const lieAngle = calculateLieAngle(data, questions)

        setLieAngle(lieAngle)

        setCustomizations(customizations)

        trackGAEvent('User', 'finish_quiz');

        setIsSubmitted(true)

        setLoading(false)

        // save email to Gadget for follow-up emails
        await saveSelections(email, quizId);
    }

    return (
        <FormContext.Provider value={{ 
            questions, 
            page, 
            setPage, 
            data, 
            setData, 
            email, 
            setEmail, 
            canSubmit, 
            handleChange, 
            handleRangeChange, 
            handleCheckboxChange,
            disablePrev, 
            disableNext,
            checkboxDisableNext, 
            prevHide, 
            nextHide, 
            submitHide, 
            handleSubmit, 
            isSubmitted,
            recommendedProducts,
            customizations,
            lieAngle
            }}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContext 