import '../index.css';

// Check if icon exists to conditionally render custom radio inputs

const Checkbox = ({ answer, checked, checkHandler, icon, value }) => {
    return (
      <div>
        {icon ? 
          <label className="custom-checkbox-label flex flex-col items-center cursor-pointer" htmlFor={value}>
            <input type="checkbox" id={value} checked={checked} onChange={checkHandler} />
            <div className="custom-checkbox-container border-2 rounded-full flex justify-center items-center w-20 h-20 border-black">
              <img class="custom-checkbox-icon" src={icon} />
            </div>
            <span className="mt-1.5 text-center" htmlFor={value}>{answer?.node?.text}</span>
          </label>
        :
          <div className="quiz-checkbox-input flex flex-col">
            <input type="checkbox" id={value} checked={checked} onChange={checkHandler} />
            <label className="mt-1.5" htmlFor={value}>{answer?.node?.text}</label>
          </div>
      }
      </div>
    )
}

export default Checkbox