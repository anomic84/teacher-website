import React, { useRef, useState } from 'react'
import ContactInputs from '../ContactInputs/ContactInputs';

const ContactModal = () => {

    const [contactModal, setContactModal] = useState(false);

    const toggleContactModal = () => {
        setContactModal(!contactModal);
    };

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

    // const form = useRef();
    const [showMessage, setShowMessage] = useState(false);
    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     setTimeout(() => { setShowMessage(false) }, 5000)
    //     emailjs.sendForm(
    //         'service_24pxcl3',
    //         'template_w1e3drq',
    //         form.current,
    //         'B7klr1udw6fN0xTAL')
    //         .then((result) => {
    //             console.log(result.text);
    //             console.log("Message sent!");
    //             setShowMessage(true)

    //             e.target.reset()
    //         }, (error) => {
    //             console.log(error.text);
    //         });

    // };

    return (
        <div className='z-10 w-full  flex'>
            <button
                onClick={toggleContactModal}
                className='bg-orchid text-turq w-[100px] mx-auto  p-1 rounded drop-shadow-md
                sm:text-xl sm:w-[150px]'
            >
                Contact
            </button>

            {/* Modal */}
            {contactModal && (
                //     <div
                //         className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm
                // flex justify-center items-center w-full'>
                <div
                    className='fixed bottom-0 h-[80vh] appgradient border-t-4 border-iris backdrop-blur-sm
            flex justify-center items-center w-full drop-shadow-lg duration-300'>
                    <div className='overlay w-[90%] '>
                        <div
                            className='modal-content bg-apricot bg-opacity-75 border-iris border-2 rounded-lg p-2 drop-shadow-xl 
                    sm:w-[400px]
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
                                        <button className="bg-orchid text-turq w-[100px]  p-1 rounded drop-shadow-md
                                        sm:text-xl sm:w-[150px]"
                                            onClick={toggleContactModal}>
                                            Close
                                        </button>
                                    </div>
                                    {showMessage && <p className="messagesentbg text-scredhover text-lg py-1 duration-300 sm:w-[25%] sm:self-center">Message Sent!</p>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ContactModal