import {React,useState,useEffect, createRef} from 'react'
import { Card, CardActionArea, CardActions, CardContent, Button, Typography, CardMedia } from '@material-ui/core'
import useStyles from "./styles"
import classNames from 'classnames'


const NewsCard = ({ newsArticle, index,highlightArticle }) => {
  const classes = useStyles()
  const [elRefs,setElRefs]=useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50)
  
  useEffect(()=>{
    setElRefs((refs)=>Array(20).fill().map((_,j)=> refs[j] || createRef()));
  },[])

  useEffect(()=>{
      if(index=== highlightArticle && elRefs[highlightArticle]){
        scrollToRef(elRefs[highlightArticle]);
      }
  }, [index,highlightArticle,elRefs])
  console.log(newsArticle)
  


  return (

    <Card ref={elRefs[index]} className={classNames(classes.card, highlightArticle===index?classes.highlight:null)}>
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