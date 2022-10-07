import React, { useContext, useEffect, useState } from "react";

import Typography from "@mui/material/Typography";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Cookies from 'js-cookie'
import { UserContextPro } from "../Context";
import { useNavigate } from "react-router-dom";
import { GridLayout } from "./Grid";
import { data } from "./data";
import { nanoid } from "nanoid";


export const Home = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const settings = {
    dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2
  };


  const [itemsPerPage] = useState(6);
  const navigate=useNavigate()
   const {userDetails,setUserDetails,isLoggedIn, setisLoggedIn}=useContext(UserContextPro)
  useEffect(()=>{
    if(!Cookies.get('foo')){
        navigate('/login')
    }else{
      setisLoggedIn(true)
    }
  },[])

  const [totalSlides, settotalSlides] = useState([])

  
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setFoodItems(data.meals);
          setLoading(false);
    }, 500);
    
    //Can make API call 
    // axios
    //   .get(
    //     `https://cors-anywhere.herokuapp.com/http://www.themealdb.com/api/json/v1/1/search.php?f=s`
    //   )
    //   .then((response) => {
    //     console.log("response", response.data);
    //     setFoodItems(response.data.meals);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setIsError(true);
    //     setLoading(false);
    //   }); 
  }, []);
  useEffect(() => {
    let items=[];
    for (let i = 1; i <=  Math.ceil(foodItems.length / itemsPerPage);i++) {
      const indexOfLastItem = i * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItem = foodItems.slice(indexOfFirstItem, indexOfLastItem);
    items.push( <GridLayout key={nanoid(10)} foodItems={currentItem}/>)
    }
    settotalSlides([...items])
  }, [foodItems])



  return (
    <div>
      {loading ? (
         <Typography variant="h4" component="h2">
        loading
       </Typography>
      ) : (
        <>
       
        <Slider {...settings}>
        {totalSlides.map((ele)=>{
      
        return ele
       })}
        </Slider>
        </>
      )}
     
    </div>
  );
};
