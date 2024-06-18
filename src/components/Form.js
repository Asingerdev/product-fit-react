import useFormContext from "../hooks/useFormContext"
import Question from './Question'
import '../index.css';

const Form = () => {
    const {
        setPage,
        canSubmit,
        disablePrev,
        disableNext,
        prevHide,
        nextHide,
        submitHide,
        handleSubmit,
        isSubmitted
    } = useFormContext()

    const handlePrev = () => setPage(prev => prev - 1)

    const handleNext = () => setPage(prev => prev + 1)

    return (
        <>
            <form className="flex flex-col items-center" onSubmit={handleSubmit}>
                <Question />
                <div className="flex w-full mt-10 px-4 md:px-8">
                    <button type="button" className={`ml-0 mr-auto button btn btn--solid btn--black ${prevHide}`} onClick={handlePrev} disabled={disablePrev}>Prev</button>
                    <button type="button" className={`ml-auto mr-0 button btn btn--solid btn--black ${nextHide}`} onClick={handleNext} disabled={disableNext}>Next</button>
                    <button type="submit" className={`button btn btn--solid btn--black ${submitHide}`} disabled={!canSubmit}>Submit</button>
                </div>
            </form>
        </>
    )
}
export default Form