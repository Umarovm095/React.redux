import { useDispatch, useSelector } from "react-redux";

    function Reset() {
    
    const dispatch = useDispatch()

    const Reset = () =>{
        dispatch({
            type: 'reset'
        })
    }
    const minus = () =>{
        dispatch({
            type: 'minus'
        })
    }
    return(
        <div>
            <button onClick={Reset}>
                reset
            </button>
            <button onClick={minus}>
                minus
            </button>
        </div>
    )
}

export default Reset;