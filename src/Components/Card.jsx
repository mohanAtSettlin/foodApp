import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function FoodCard({ CardData }) {
  const navigate = useNavigate();

  return (
    <Box>
      <Card sx={{ maxWidth: 345, margin: "auto" }}>
        <CardMedia
          component="img"
          height="140"
          image={CardData.strMealThumb}
          alt={CardData.strMeal}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {CardData.strMeal}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            style={{ textOverflow: "ellipsis" }}
          >
            {CardData.strInstructions?.slice(0, 100) + "......"}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <Link href={CardData.strYoutube}>Watch</Link>{" "}
          </Button>
          <Button
            size="small"
            onClick={() => {
              navigate(`item/${CardData.idMeal}`);
            }}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
