import React from 'react'
import "./Explorem.css"
import { menu_list } from '../../assets/assets'
const Explorem = ({category,setCategory}) => {
  return (
    <div className="explore-menu" id="explore-menu">
        <h1>Explore our Menu</h1>
        <p className="explore-menu-text"> choose from a diverse set of menu and order your food from various restaurants</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                <div onClick={()=>
                    setCategory(prev=>prev===item.menu_name?"All":item.menu_name)
                }key={index} className="explore-menu-list-item">
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=""></img>
                    <p>{item.menu_name}</p>
                </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default Explorem