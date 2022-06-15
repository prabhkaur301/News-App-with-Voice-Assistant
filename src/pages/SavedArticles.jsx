import { useEffect, useState, React } from "react";
import { Grid, Grow } from "@material-ui/core";
import useStyles from "../components/NewsCards/styles";
import NewsCard from "../components/NewsCard/NewsCard";

const SavedArticles = () => {
  const classes = useStyles();
  const [storedArticles, setStoredArticles] = useState([]);
  useEffect(() => {
    let articlesAdded = localStorage.getItem("savedNews");
    setStoredArticles(JSON.parse(articlesAdded));
  }, [storedArticles]);
  return (
    <Grow in direction="left">
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {storedArticles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={4} style={{ display: "flex" }}>
            <NewsCard
              className={classes.card}
              newsArticle={article}
              index={i}
            />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default SavedArticles;
