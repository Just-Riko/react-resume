let Li = props => {
    return (<li onClick={() => props.click(props.text)}>{props.text}</li>)
}

export default Li