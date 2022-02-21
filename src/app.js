import React,{useEffect} from "react"
import alanBtn from "@alan-ai/alan-sdk-web";

const apiKey="e92bd3d581cc061e987e36cd076e64902e956eca572e1d8b807a3e2338fdd0dc/stage"
const App=()=>{

    useEffect(()=>{
        alanBtn({
            key:apiKey,
            onCommand: (commandData) => {
                if (commandData.command === '') {
                    // Call the client code that will react to the received command
                }
            }
        })
    },[])

    return(
        <h1>Hi</h1>
    )
}
export default App;