import React from 'react'
import "./home.styles.css"
import {InputField} from '../components/InputField/InputField'

const styles = {
    efcYellow: '#ED8B00',
    fontMedium: "1.5rem"
}
const formLabels = ["Last Name", "Member Email Address", "Phone Number"]


const Lists = ({list, user})=>{
    return list.map(item => <InputField name={item} value={user}/>)
}
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
    const handleSubmit = ()=> {
        console.log(user)
        setLoggedIn(true)
    }
    return <div className="home-main">
        {isLoggedIn ? 
        <h1>Hello</h1> : 
        <div className='form-wrapper'>
            <header>Online Banking</header>
            <p style={{color: styles.efcYellow, fontSize: styles.fontMedium}}>
                Provide the following information to verify your identity
            </p>
            <InputField name={'Username'} value={user.username} onChangeHandler={handlerChange}/>
            <InputField name={'Password'} value={user.password} onChangeHandler={handlerChange}/>
            <button onClick={handleSubmit}>LOG IN</button>
        </div>}
        
    </div>
}