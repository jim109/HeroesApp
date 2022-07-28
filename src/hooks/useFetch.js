import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {   
    
    const [state, setState] = useState({ data: [], loading: true, error: null})

    useEffect( ()=>{
        fetch(url)
        .then (resp => resp.json())
        .then (data => {

            setState({
                data
            })
        });
    }, [url])

    return state;
  
}