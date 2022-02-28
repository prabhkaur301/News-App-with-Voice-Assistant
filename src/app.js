import React,{useEffect,useState} from "react"
import alanBtn from "@alan-ai/alan-sdk-web";
import Cards from "./components/NewsCards/Cards";

const App=()=>{
    // setting the state for articles
    const [newsArticles,setNewsArticles]=useState([]);

    const apiKey="e92bd3d581cc061e987e36cd076e64902e956eca572e1d8b807a3e2338fdd0dc/stage"
    //useeffect for interacting with Alan Ai
    useEffect(()=>{
        alanBtn({
            key:apiKey,
            onCommand: ({command,articles}) => {
                if (command === "top-headline") {
                    console.log(articles)
                    setNewsArticles(articles)
                }
               
            }
        })
    },[])

    return(
       <>
           
              <h1>News App with Voice Assistant</h1>
              <Cards articles={newsArticles}/>
               
           
       </>
    )
}
export default App;