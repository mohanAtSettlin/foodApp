import { Box, Stack, Typography, Chip, Button } from "@mui/material";

import axios from "axios";
import Cookies from 'js-cookie'
import React, { useEffect, useState ,useContext} from "react";
import { useNavigate, useParams } from "react-router-dom";

import Grid from "@mui/material/Grid";
import { UserContextPro } from "../Context";
import Divider from "@mui/material/Divider";
import { data } from "./data";

export const SingleItem = () => {
  const params = useParams();
  const navigate=useNavigate()
  const [foodItem, setFoodItem] = useState(null);
  const [isError, setError] = useState(false);
  const [loading, setLoading] = useState(true);
 
   const {userDetails,setUserDetails,isLoggedIn, setisLoggedIn}=useContext(UserContextPro)
  
   useEffect(()=>{
    if(!Cookies.get('foo')){
      navigate('/login')
  }else{
    setisLoggedIn(true)
  }
  },[])
  useEffect(() => {
    setLoading(true);
   
    setTimeout(() => {
      
      const item= data.meals.find((ele)=> ele.idMeal===params.id)
      setFoodItem(item);
      setLoading(false);
    }, 500);

    // axios
    //   .get(
    //     `https://cors-anywhere.herokuapp.com/www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`,{
    //         crossdomain:true
    //     }
    //   )
    //   .then((res) => {
    //     console.log(res);
    //     setFoodItem(res.data.meals[0]);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setLoading(false);
    //     setError(true);
    //   });
  }, []);

  if (loading)
    return (
      <Typography variant="h4" component="h2">
        loading
      </Typography>
    );

    if(isError) return  <Typography variant="h4" component="h2">
    Error in Finding the Item
  </Typography>

  return (
    <Box component="span" sx={{ p: 2, border: "1px border grey",textAlign:'center' }}>
      <Stack  direction={{ xs: 'column', sm: 'column',md:'row' ,lg:'row' }}  justifyContent="center"
  alignItems="center" spacing={12} >
        <Box component="span" sx={{ p: 2, border: "1px border grey" }}>
          <img src={foodItem.strMealThumb} alt={foodItem.strMeal} width="90%" />
        </Box>
        <Box component="span" sx={{ p: 2, border: "1px border grey" }}>
          <Box
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <Box sx={{ my: 3, mx: 2 }}>
              <Grid container alignItems="center">
                <Grid item xs>
                  <Typography gutterBottom variant="h4" component="div">
                    {foodItem.strMeal}
                  </Typography>
                </Grid>
              </Grid>
              <Typography color="text.secondary" variant="body2">
                {foodItem.strInstructions}
              </Typography>
            </Box>
            <Divider variant="middle" />
            <Box sx={{ m: 2 }}>
              <Typography gutterBottom variant="body1">
                Ingredients
              </Typography>
              <Stack direction="row" spacing={1}>
                <Chip label={foodItem.strIngredient1} />
                <Chip color="primary" label={foodItem.strIngredient2} />
                <Chip label={foodItem.strIngredient3} />
                <Chip label={foodItem.strIngredient4} />
              </Stack>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};
