
function Button(props) {
    return (
        <button className="px-4 py-1 border-2 border-black bg-green-200 rounded-md" onClick={props.onClick} id={props.id}>
            {props.label}
        </button>
    )
}

export default Button;