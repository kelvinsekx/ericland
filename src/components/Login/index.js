import './login.styles.css'
import {InputField} from '../InputField/InputField'



export default function Login ({
    state,
    handleSubmit
}){
    return (
        <div className='login'>
            <p>
                Provide the following information to verify your identity
            </p>
            <form 
                onSubmit={handleSubmit}
            >
                <InputField name={'username'} />
                <InputField name={'password'} />
                <button  type="submit" disabled={state.submitting}>LOG IN</button>
            </form>
        </div>
    )
}