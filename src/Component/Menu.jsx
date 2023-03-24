import React, { useEffect, useState } from "react";
import SkeletonElement from "../Skeletons/SkeletonElement";
import data from "./Json/posts.json"

const Menu = ()=>{
    const [Menu,setMenu] = useState (null);
    
    useEffect(() =>{
       setTimeout(async()=>{
         setMenu(data);
       },3000)
    })
    
    return(
        <div classname="menu">
           <h2>Menu</h2>
          
           {Menu && Menu.map((Menu,index) =>(
            <div className="" key={Menu.id}>
                <h3>{index} - {Menu.title}</h3>
            </div>
           ))}
           
           
        
        {!Menu && <div> Loading .... wait a minute
        <SkeletonElement/>
          {/* <SkeletonElement/>
          <SkeletonElement/> */}
          </div>}
        
        </div>
        
    )
}
export default Menu;