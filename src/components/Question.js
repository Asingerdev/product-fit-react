import useFormContext from "../hooks/useFormContext"
import Answers from './Answers'
import '../index.css';

const Question = () => {

    const { questions, page } = useFormContext()

    // Determine which question to display by page number
    const question = questions[page]
    const answers = question?.node?.answers?.edges

    return (
        <div className="question-container w-full flex flex-col px-4 md:px-8">
            <h2 className="mt-5 text-2xl font-bold">{ question?.node?.text }</h2>
            <p className="mt-5">{ question?.node?.description }</p>

            <Answers answers={answers} question={question} />
        </div>
    )
}

export default Question