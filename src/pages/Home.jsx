import React from 'react'
import {NavLink} from "react-router-dom"
import { Typography} from '@material-ui/core'
import Cards from '../components/NewsCards/Cards'
const Home = ({articles,highlightArticle}) => {
  return (
    <div>
     <NavLink to="/saveList">Saved Articles</NavLink>
         
    <div className="container" style={{ display: "flex",flexDirection:"column",alignItems:"center" }}>
    <div id="robot" style={{ width: 200, height: 200 }}/>
    <Typography variant="h2" color="textPrimary" style={{textAlign:'center',fontSize:'30px',color:'white'}}>Hi! I'm Alan,<br/> Your personal News Assistant</Typography>
    </div>
  
    <Cards articles={articles} highlightArticle={highlightArticle}/>
   
    </div>
  )
}

export default Home