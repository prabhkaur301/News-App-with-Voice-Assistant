import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import {Grid,Grow, Typography} from '@material-ui/core'
import useStyles from "./styles"

const infoCards=[

    { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
    { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones,Elections, PM Modi...', text: 'What\'s up with PlayStation 5' },
    { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN,Aljazeera,Buzzfeed,CBC News, ABC News...', text: 'Give me the news from CNN' },
  
];

const Cards = ({articles,highlightArticle}) => {
  
 const classes = useStyles();

 if(!articles.length){
   return(
    <Grow in direction="left">
    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
     
     {
     infoCards.map((infoCard,i)=>(
         <Grid item xs={12} sm={6} md={4} lg={3} className={classes.container} key={i}>
           <div className={classes.card} style={{backgroundColor:infoCard.color}}>
             <Typography variant="h4" component="h4" ><strong>{infoCard.title}</strong></Typography>
             {infoCard.info?<Typography variant="body2" component="p" >{infoCard.info}</Typography>:null}
             <Typography variant="h6" component="h6" >Try saying:<br/><i>{infoCard.text}</i></Typography>
           </div>
         </Grid>
     ))}
    </Grid>
    </Grow>
   )
 }
 else{
  return (
    <Grow in  direction="left">
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {articles.map((article,i)=>
        (
        <Grid item xs={12} sm={6} md={4} lg={4} style={{display:'flex'}}>
          <NewsCard className={classes.card} newsArticle={article} highlightArticle={highlightArticle} index={i} />
        </Grid>
        ))}
      </Grid>
    </Grow>
  )
}
 }
  

export default Cards;