import React from 'react';
import './Homepage.css';
import {graphql,useStaticQuery,Link} from 'gatsby';
import Img from "gatsby-image"
import Navline from './Navline';
import Imglayout from './Imglayout';

function Homepage() {
    const data = useStaticQuery(graphql`
    query MyQuery {
      laptop: file(relativePath: {eq: "laptop.jpg"}) {
          childImageSharp {
            fluid {
                aspectRatio
                base64
                sizes
                src
                srcSet
            }
          }
        },
        watch: file(relativePath: {eq: "watch.jpg"}) {
            childImageSharp {
              fluid (maxWidth: 2000, quality: 100){
                  aspectRatio
                  base64
                 
                  sizes
                  src
                  srcSet
              }
            }
          },

          camera: file(relativePath: {eq: "camera.jpg"}) {
            childImageSharp {
              fluid (maxWidth: 2000, quality: 100){
                  aspectRatio
                  base64
                 
                  sizes
                  src
                  srcSet
              }
            }
          },

          tv: file(relativePath: {eq: "tv.jpg"}) {
            childImageSharp {
              fluid (maxWidth: 2000, quality: 100){
                  aspectRatio
                  base64
                 
                  sizes
                  src
                  srcSet
              }
            }
          },
          dresses: file(relativePath: {eq: "dresses.jpg"}) {
            childImageSharp {
              fluid (maxWidth: 2000, quality: 100){
                  aspectRatio
                  base64
                 
                  sizes
                  src
                  srcSet
              }
            }
          },

          dresses2: file(relativePath: {eq: "dresses2.jpg"}) {
            childImageSharp {
              fluid (maxWidth: 2000){
                  aspectRatio
                  base64
                 
                  sizes
                  src
                  srcSet
              }
            }
          }
      }
      
    
    `);
    return (
        <div className="homepage">

        <Navline/>

        <div className="homepage_article">

       <strong> <article >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</article></strong>
       </div>
        <h1 className="homepage_header">Latest Products & Recommendations</h1>

        <div className="homepage_img--box">


        <Link to="/best-laptops"> <div className="homepage_img ">

        <p >

        <Img

        className="home_img"

        
        fluid={data.laptop.childImageSharp.fluid}
         alt="laptops"/>

         
         </p>

         <Imglayout className="home_img--layout" date="25 Feb 2021" desc="Top 10 Laptops in  2021"/>
        
        </div></Link>
       
       
        <div className="homepage_img">

        <p>

       <Img
         fluid={data.watch.childImageSharp.fluid}
          alt="laptops"/>

          </p>

          <Imglayout className="home_img--layout" date="25 Feb 2021" desc="Top 10 Elegant Watches in  2021"/>

          </div>
          </div>

          
        <div className="homepage_img--box">


        <div className="homepage_img">

        <p>

        <Img
        fluid={data.camera.childImageSharp.fluid}
         alt="laptops"/>
         </p>
         <Imglayout className="home_img--layout" date="25 Feb 2021" desc="Top 10 Budget Camera"/>
        
        </div>
       
       
        <div className="homepage_img">

        <p>

          <Img
         fluid={data.tv.childImageSharp.fluid}
          alt="laptops"/>

         

          </p>

          <Imglayout className="home_img--layout" date="25 Feb 2021" desc="Top 10 Bedroom OLED / 4K TV"/>

          </div>
          </div>

          <div className="homepage_img--box">


          <div className="homepage_img">
  
          <p>
  
          <Img
          fluid={data.dresses.childImageSharp.fluid}
           alt="laptops"/>
           </p>

           <Imglayout className="home_img--layout" date="25 Feb 2021" desc="Top 10 Dresses in New Arrivals "/>
          
          </div>
         
         
          <div className="homepage_img">
  
          <p>
  
            <Img
           fluid={data.dresses2.childImageSharp.fluid}
            alt="laptops"/>
  
            </p>

            
           <Imglayout className="home_img--layout" date="25 Feb 2021" desc="Top 10  Dresses For Festive and Party Wear"/>
  
            </div>
            </div>


          



            
        </div>

        
    )
}

export default Homepage

