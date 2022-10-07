import React from 'react'
import FoodCard from './Card'
import { Grid } from "@mui/material";
import { nanoid } from 'nanoid'

export const GridLayout = ({foodItems}) => {
  return (
    <Grid container   direction="row"
    justifyContent="center"
    alignItems="center" spacing={2} mt={3} p={3} sx={{width:"100%" ,margin:"auto"}}>
       
    {foodItems.map((item)=><Grid key={nanoid()} item xs={12} sm={6} md={4}>
        <FoodCard CardData={item}/>
      </Grid>)}
     </Grid>
  )
}
