import { useDispatch, useSelector } from "react-redux";

    function Reset() {
    
    const dispatch = useDispatch()

    const Reset = () =>{
        dispatch({
            type: 'reset'
        })
    }

    }
    return(
        <div>
            <button onClick={Reset}>
                reset
            </button>
        </div>
    )
}

export default Reset;
