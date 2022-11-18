import "./input.styles.css"

export function InputField ({
    name, type="text", minLength
}){
    return <div className="inputfield">
    <label htmlFor={name}>{name}</label>
    <input name={name} type={type} minLength={minLength} />
</div>
}