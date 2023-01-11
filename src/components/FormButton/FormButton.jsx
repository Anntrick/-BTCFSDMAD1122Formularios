



const FormButton = (props) => {


    return (
        <div className="FormButton">
            <input type="submit" value={props.value} onClick={props.handle} />
        </div>
    )
}


export default FormButton