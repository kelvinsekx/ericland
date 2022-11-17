import "./input.styles.css"

export function InputField ({
    name, value, onChangeHandler
}){
    return <div className="inputfield">
    <label htmlFor={name}>{name}</label>
    <input name={name}/>
</div>
}