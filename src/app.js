import React, { useEffect, useState } from "react"
import alanBtn from "@alan-ai/alan-sdk-web";
import lottie from "lottie-web";
import robot from "./lottie/73234-robot-assistant-online-manager (1).json";
import wordsToNumbers from "words-to-numbers";
import Pages from "./pages/Pages";


const App = () => {
    // setting the state for articles
    const [newsArticles, setNewsArticles] = useState([]);
    const [highlightArticle, setHighlightArticle] = useState(-1);

    const apiKey = process.env.REACT_APP_ALAN_API_KEY;
    // console.log(apiKey)
    //useeffect for interacting with Alan Ai
    useEffect(() => {
        alanBtn({
            key: apiKey,
            onCommand: ({ command, articles, number }) => {
                if (command === "top-headline") {
                    console.log(articles)
                    setNewsArticles(articles)
                }

                else if (command === "highlight") {
                    setHighlightArticle((prevHighlightArticle) => prevHighlightArticle + 1);
                }
                if (command === "newHeadlines") {
                    console.log(articles)
                    setNewsArticles(articles)
                }
                else if (command === 'openArticle') {
                    window.open(articles[wordsToNumbers(number)].url, '_blank');
                    setNewsArticles(articles)
                }
                else if (command === 'saveArticle') {
                    localStorage.setItem("savedNews", JSON.stringify(articles[wordsToNumbers(number)]));
                    setNewsArticles(articles)
                }

            }
        })
    }, [apiKey])
    useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector("#robot"),
            animationData: robot
        });
    }, []);

    return (
        <>
            <Pages articles={newsArticles} highlightArticle={highlightArticle} />


        </>
    )
}
export default App;