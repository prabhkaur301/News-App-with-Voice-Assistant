import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import {Grid,Grow} from '@material-ui/core'
import useStyles from "./styles"
 const Cards = (props) => {
   
  const classes = useStyles();
  return (
    <Grow in>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {props.articles.map((article,i)=>
        (
        <Grid item xs={12} sm={6} md={4} lg={3} style={{display:'flex'}}>
          <NewsCard className={classes.card} newsArticle={article} index={i} />
        </Grid>
        ))}
      </Grid>
    </Grow>
  )
}

export default Cards