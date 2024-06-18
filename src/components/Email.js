import '../index.css';
import useFormContext from '../hooks/useFormContext';

// Check if icon exists to conditionally render custom radio inputs

const Email = ({ name }) => {

  const { email, setEmail } = useFormContext()

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  return (
    <div>
      <input className="w-full max-w-96 mt-5 p-2 border-[1px] border-black" type="email" id={`${name}-email`} name="email" placeholder="Email" value={email} onChange={handleEmail} />
    </div>
  )
}

export default Email