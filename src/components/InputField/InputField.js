import "./input.styles.css"

export function InputField ({
    name, value, onChangeHandler
}){
    return <div className="inputfield">
    <label>{name}</label>
    <input value={value} onChange={onChangeHandler} name={name.toLowerCase()}/>
</div>
}