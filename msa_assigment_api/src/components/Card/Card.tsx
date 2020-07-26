import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { IMovie } from "../../pages/Home/Home";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    
  },
  media: {
    height: 140, 
  },
});

interface IProps {
  movieData: IMovie;
}

const MovieCard: React.FC<IProps> = ({ movieData }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={movieData.Poster}
          title={movieData.Title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {movieData.Title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {movieData.Year}
          </Typography>
        </CardContent>
      </CardActionArea>
     
      <CardActions>
       
        <Link to={`/show/${movieData.imdbID}`}>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </Link>

      </CardActions>
      
    </Card>
  );
};

export default MovieCard;
