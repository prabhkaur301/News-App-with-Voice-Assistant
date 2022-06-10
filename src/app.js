import React,{useEffect,useState} from "react"
import alanBtn from "@alan-ai/alan-sdk-web";
import Cards from "./components/NewsCards/Cards";
import lottie from "lottie-web";
import robot from "./lottie/73234-robot-assistant-online-manager (1).json";
import { Typography } from "@material-ui/core";
import wordsToNumbers from "words-to-numbers";


const App=()=>{
    // setting the state for articles
    const [newsArticles,setNewsArticles]=useState([]);
    const [highlightArticle,setHighlightArticle]=useState(-1);

    const apiKey=process.env.REACT_APP_ALAN_API_KEY;
    // console.log(apiKey)
    //useeffect for interacting with Alan Ai
    useEffect(()=>{
        alanBtn({
            key:apiKey,
            onCommand: ({command,articles,number}) => {
                if (command === "top-headline") {
                    console.log(articles)
                    setNewsArticles(articles)
                }
                
                else if(command === "highlight"){
                    setHighlightArticle((prevHighlightArticle)=>prevHighlightArticle+1);
                }
                if(command === "top-headline"){
                    console.log(articles)
                    setNewsArticles(articles)
                }
                else if(command === 'openArticle'){
                    window.open(articles[wordsToNumbers(number)].url, '_blank');
                    setNewsArticles(articles)
                }
               
            }
        })
    },[apiKey])
    useEffect(() => {
        lottie.loadAnimation({
        container: document.querySelector("#robot"),
        animationData: robot
        });
      }, []);

    return(
       <>
             {
              <div className="container" style={{ display: "flex",flexDirection:"column",alignItems:"center" }}>
              <div id="robot" style={{ width: 200, height: 200 }}/>
              <Typography variant="h2" color="textPrimary" style={{textAlign:'center',fontSize:'30px',color:'white'}}>Hi! I'm Alan,<br/> Your personal News Assistant</Typography>
              </div>
              }
              <Cards articles={newsArticles} highlightArticle={highlightArticle}/>
            
        </>
    )
}
export default App;