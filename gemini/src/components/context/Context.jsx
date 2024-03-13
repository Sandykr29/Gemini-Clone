import { createContext, useState } from "react";
import runChat from "../config/gemini";
export const Context=createContext();

const ContextProvider=(props)=>{
        const [input,setInput]=useState("")
        const [recentPrompt,setRecentPrompt]=useState("")
        const [prevPrompts,setPrevPrompts]=useState([])
        const [showResult,setShowResult]=useState(false)
        const [loading,setLoading]=useState(false)
        const [resultData,setResultData]=useState("")

    const onSent=async (prompt)=>{
        setResultData("")
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(input)
      const response= await runChat(input)|| null
      setResultData(response)
      setLoading(false)
      setInput("")
    }

    onSent("what is reactJs")

    const contextValue={
      input,setInput,recentPrompt,setRecentPrompt,prevPrompts,setPrevPrompts,showResult,loading,resultData,onSent
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;