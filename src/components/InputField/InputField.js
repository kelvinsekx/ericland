import "./input.styles.css"

export function InputField ({
    name, value, onChangeHandler
}){
    return <div className="inputfield">
    <label id={name}>{name}</label>
    <input value={value} onChange={onChangeHandler} name={name}/>
</div>
}