import React from 'react';
import './Product.css';
import {useStaticQuery} from 'gatsby'

import Img from "gatsby-image";

function Product({link,imglink,os,proc,ram,display,gcard,ports,wt}) {

   

        


 

      
    return (
        <div className="product">

        <div className="product_info">

        <div className="productdesc_intro product_img">

        <Img
        loading="eager" 

        fluid={imglink}

        alt="laptop"/>
       

        

         </div>
        <div className="product_specs">
        <h4>Operating system : {os} </h4>
        <h4>Processor: {proc}</h4>
        <h4>Ram & Storage: {ram}</h4>
        <h4>Display : {display} </h4>
        <h4>Graphic Card : {gcard}</h4>
        <h4>Ports and Connectivity : {ports}</h4>
        <h4>Weight : {wt}</h4>


       <a href={link} ><button href={link} className="product_button">View Product</button></a>
        
        
        
        
        </div>

        
        
        </div>
            
        </div>
    )
}

export default Product
