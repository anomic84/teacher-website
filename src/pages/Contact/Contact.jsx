import React, {useState} from 'react'
import { ContactInputs } from '../../containers';

const Contact = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
});
const inputs = [
    {
        id: 1,
        name: "name",
        type: "text",
        placeholder: "Name",
        errorMessage: "Name Needed!",
        label: "Name",

        required: true,
    },
    {
        id: 2,
        name: "email",
        type: "email",
        placeholder: "Email",
        errorMessage: "It should be a valid email address!",
        label: "Email",
        required: true,
    },
    {
        id: 3,
        name: "message",
        type: "test",
        placeholder: "Message",
        errorMessage: "Message Needed!",
        label: "Message",

        required: true,
    }
]

const handleSubmit = (e) => {
    e.preventDefault();
};

const onChange = (e) => {
    console.log(e.target.value)
    setValues({ ...values, [e.target.name]: e.target.value })
}

  return (
    <div className='hidden md:block w-screen  appgradient'
    id='contact'>
                            <div
                            className='modal-content bg-apricot bg-opacity-75 p-2 drop-shadow-xl mx-auto max-w-[70%]
        
                    xl:w-[800px]'
                        >
                            <div className='xl:py-8'>
                                <h1
                                    className='text-center font-titan text-iris text-2xl
                                    sm:text-3xl
                                                lg:text-4xl'
                                >
                                    Contact
                                </h1>
                                <form className='' >
                                    {/* ref={form} onSubmit={sendEmail} */}
                                    {inputs.map((input) => (
                                        <ContactInputs
                                            key={input.id}
                                            {...input}
                                            value={values[input.name]}
                                            onChange={onChange}
                                        />
                                    ))}
                                    <div className='flex flex-row justify-between pt-4'>
                                        <button className="bg-orchid text-turq w-[100px]  p-1 rounded drop-shadow-md
                                        sm:text-xl sm:w-[150px]"
                                            onClick={() => handleSubmit()}>
                                            Submit
                                        </button>
                                     
                                    </div>
                                    {/* {showMessage && <p className="messagesentbg text-scredhover text-lg py-1 duration-300 sm:w-[25%] sm:self-center">Message Sent!</p>} */}
                                </form>
                            </div>
                        </div>

    </div>
  )
}

export default Contact