import React from 'react'
import { Card, CardActionArea, CardActions, CardContent, Button, Typography, CardMedia } from '@material-ui/core'
import useStyles from "./styles"


const NewsCard = ({ newsArticle, index }) => {
  console.log(newsArticle)
  const classes = useStyles()
  return (

    <Card className={classes.card}>
      <CardActionArea href={newsArticle.url} target="_blank">
        <CardMedia className={classes.media} image={newsArticle.urlToImage || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} />


        <div className={classes.details}>
          <Typography varient="body2" color="textSecondary" component="h2">{(new Date(newsArticle.publishedAt)).toDateString()}</Typography>
          <Typography varient="body2" color="textSecondary" component="h2">{newsArticle.source.name}</Typography>
        </div>
        <Typography varient="h2" gutterBottom className={classes.title}>{newsArticle.title}</Typography>
        <CardContent>
          <Typography varient="body2" color="textSecondary" component="p" >{newsArticle.description}</Typography>
        </CardContent>

      </CardActionArea>

      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" href={newsArticle.url} target="_blank">
          Learn More
        </Button>
        <Typography variant="h5" color="textSecondary" >{index + 1}</Typography>
      </CardActions>
    </Card>
  )
}

export default NewsCard