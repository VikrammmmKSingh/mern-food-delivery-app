import React from 'react'
import './Home.css'
import Header from '../../Header/Header'
import Explorem from '../../ExploreMenu/Explorem'
import { useState } from 'react'
import FoodDisplay from '../../FoodDisplay/FoodDisplay'
import AppDownload from '../../AppDownload/AppDownload'
// import { useState } from 'react'

const Home = () => {
  const[category,setCategory]=useState("All");
  return (
    <div>
      <Header></Header>
      <Explorem category={category} setCategory={setCategory} ></Explorem>
      <FoodDisplay category={category}></FoodDisplay>
      <AppDownload></AppDownload>
    </div>
  )
}

export default Home