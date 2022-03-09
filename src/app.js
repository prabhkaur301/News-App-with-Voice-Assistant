import React,{useEffect,useState} from "react"
import alanBtn from "@alan-ai/alan-sdk-web";
import Cards from "./components/NewsCards/Cards";
import lottie from "lottie-web";
import robot from "./lottie/73234-robot-assistant-online-manager (1).json";
import { Typography } from "@material-ui/core";


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
                else if (command === "term-headline") {
                    setNewsArticles(articles)
                }
               
            }
        })
    },[])
    useEffect(() => {
        lottie.loadAnimation({
        container: document.querySelector("#robot"),
        animationData: robot
        });
      }, []);

    return(
       <>
             
              {
              (newsArticles.length<=0) &&
              <div className="container" style={{ display: "flex",flexDirection:"column",alignItems:"center" }}>
              <div id="robot" style={{ width: 200, height: 200 }}/>
              <Typography variant="h2" color="textPrimary" style={{textAlign:'center',fontSize:'30px'}}>Hi! I'm Alan,<br/> Your personal News Assistant</Typography>
              </div>
              }
              <Cards articles={newsArticles}/>
            
               
           
       </>
    )
}
export default App;