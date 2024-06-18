import useFormContext from '../hooks/useFormContext'
import '../index.css';

const ProgressBar = () => {
    const { page, questions} = useFormContext()

    const steps = questions.map((question, i) => {
        return <div key={i} className={`text-white text-xs px-1 mx-0.5 font-semibold min-w-5 flex justify-center items-center ${i === page ? 'quiz-step-active' : ''}`}>{i+1}</div>
    })

    return (
        <section className="step-bar w-full flex justify-center">
            <div className="w-full step-progress flex justify-center items-center p-4 md:rounded-3xl bg-black">
                <div className="hidden md:block text-xs text-white font-semibold mr-1">Questions</div>
                { steps }
            </div>
        </section>
    )
}
export default ProgressBar