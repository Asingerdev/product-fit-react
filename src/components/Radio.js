import '../index.css';

// Check if icon exists to conditionally render custom radio inputs

const Radio = ({ answer, name, checked, value, changeSelection, icon }) => {
    return (
      <div>
        {icon ? 
          <label className="custom-radio-label flex flex-col items-center cursor-pointer" htmlFor={value}>
            <input type="radio" value={value} id={value} name={name} checked={checked} onChange={changeSelection} />
            <div className="custom-radio-container border-2 rounded-full flex justify-center items-center w-20 h-20 border-black">
              <img className="custom-radio-icon" src={icon} alt="" />
            </div>
            <span className="mt-1.5 text-center" htmlFor={value}>{answer?.node?.text}</span>
          </label>
        :
          <div className="quiz-radio-input flex flex-col items-center">
            <input type="radio" value={value} id={value} name={name} checked={checked} onChange={changeSelection} />
            <label className="mt-1.5 text-center" htmlFor={value}>{answer?.node?.text}</label>
          </div>
      }
      </div>
    )
}

export default Radio