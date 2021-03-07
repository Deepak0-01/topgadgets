import React from 'react';
import './ProductDesc.css';
import {graphql,useStaticQuery} from 'gatsby';
import Img from "gatsby-image";
import Product from './Product';

import moment from 'moment';

function ProductDesc() {

    const data = useStaticQuery(graphql`

    query LaptopQuery {
      laptop:  file(relativePath: {eq: "laptop.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 2000,quality:100) {
                aspectRatio
                base64
               
                sizes
                src
                srcSet
            }
          }
        },

        lggram:  file(relativePath: {eq: "lggram2.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 400,,quality:100) {
                aspectRatio
                base64
               
                sizes
                src
                srcSet
            }
          }
        },

        acertriton:   file(name: {eq: "acertriton1"}) {
          childImageSharp {
            fluid (maxWidth: 400,quality:100){
              aspectRatio
              base64
              sizes
              src
              srcSet
            }
          }
        },

        inspiron:   file(name: {eq: "inspiron"}) {
          childImageSharp {
            fluid (maxWidth: 400,quality:100){
              aspectRatio
              base64
              sizes
              src
              srcSet
            }
          }
        },

       

        legion:   file(name: {eq: "legion5i"}) {
          childImageSharp {
            fluid(maxWidth: 400,quality:100) {
              aspectRatio
              base64
              sizes
              src
              srcSet
            }
          }
        },
        macbook:   file(name: {eq: "macbook"}) {
          childImageSharp {
            fluid (maxWidth: 400,quality:100){
              aspectRatio
              base64
              sizes
              src
              srcSet
            }
          }
        },

        vivobook:   file(name: {eq: "VIVOBOOK"}) {
          childImageSharp {
            fluid (maxWidth: 400,quality:100){
              aspectRatio
              base64
              sizes
              src
              srcSet
            }
          }
        },

        dell:  file(name: {eq: "DELLG3"}) {
          childImageSharp {
            fluid (maxWidth: 400,quality:100){
              aspectRatio
              base64
              sizes
              src
              srcSet
            }
          }
        },

        thinkpad:   file(name: {eq: "thinkpad"}) {
          childImageSharp {
            fluid (maxWidth: 400,quality:100){
              aspectRatio
              base64
              sizes
              src
              srcSet
            }
          }
        },
        hp:   file(name: {eq: "hp14"}) {
          childImageSharp {
            fluid(maxWidth: 400,quality:100) {
              aspectRatio
              base64
              sizes
              src
              srcSet
            }
          }
        },

        asustuf:   file(name: {eq: "asustuf1"}) {
          childImageSharp {
            fluid (maxWidth: 400,quality:100){
              aspectRatio
              base64
              sizes
              src
              srcSet
            }
          }
        },


      

      }
    
        `);


   
console.log(data);
   

  
    return (
        <div className="productdesc">
        <h1>Top 10 Laptops in 2021 Under 1 Lakh (India)</h1>
        <strong><small className="productdesc_small">{moment(Date.now()).format('MMMM Do YYYY')}</small></strong>

        <div className="desc">
   


        <div className="productdesc_intro">
       
        <Img



        
        fluid={data.laptop.childImageSharp.fluid}
         alt="laptops"/>

        

         </div>

         <article className="product_article">Browsing Internet for a new laptop ? Yeah! you have come across the right place. In this article we will share the best available laptops in market in all price 
         segments. Laptops are now becoming an integral part of our lives. Whether you are a student, a teacher or a technocrat you definitely need  a laptop that can handle all your daily tasks profoundly.
         Here is the list of best available laptops in Indian Market (2021).
         </article>
         </div> 

        

         <h2 className="productdesc_h1">Here are the parameters on which we assess each laptop:</h2>

         <div className="laptop_para--box">
        
         <ul className="laptop_parameters">
         <div className="features"><li>Operating System:</li><article className="feature_article">It depends on user. 77% to 87.8% people prefer Windows. Windows offers better value for money. You can also choose Mac or Linux. </article></div>
         <div className="features"><li>Processor:</li><article className="feature_article">Can be thought of as an engine whose power depends on the clock speed and number of cores available. Higher cores will enable you to do multitasking in one go. NOW A DAYS there is a great competition between AMD and INTEL. Frankly speaking Ryzen offers better value for money but intel offers durability and software supports. For Gaming blindly go for ryzen and for developement and day-to-day task intel should be peferred.</article></div>
         <div className="features"><li>Ram:</li><article className="feature_article">Whether you are a gamer or a developer your system should have atleast 4 GB RAM for handling apps. Again it depends on user but recommended is 8 GB.</article></div>
         <div className="features"><li>Display:</li><article className="feature_article">Most of the people don't pay attention to it . Having a display with brightness 300 nits or above is a great deal especially for content creators.</article></div>
         <div className="features"><li>Graphic Card:</li><article className="feature_article">If you do just  day-to-day tasks integrated GPU'S are more than enough but if you are a gamer or content creator your system should have a dedicated GPU.</article></div>
         <div className="features"> <li>Ports and Connectivity:</li><article className="feature_article">One of the most important things you should look into. Now a days almost all laptops are equipped with all ports except few. Common ports are USB 3.0 , headphone jack , HDMI , TYPE-C , SD-Card reader and charging port</article></div>
         <div className="features"><li>Weight:</li><article className="feature_article">If You are a student anything between 0.8kg to 2 kg is good and if you are a gamer 2kgs - 3kgs should be an ideal choice</article></div>

         
         </ul>

         </div>

         <div className="products">

         <div className="product_item">

         <h2 className="product_header">#1 LG Gram 10th Gen Intel Core i7-1065G7 17-inch  </h2>
         <Product link="https://amzn.to/3bxxiBe" imglink={data.lggram.childImageSharp.fluid} os="Windows 10 Home 64 Bit" proc="10th Gen Intel i7-1065G7" ram=" 8GB DDR 4/ 512 GB SSD" display="17-inch IPS WQXGA (2560X1600) "
         gcard="Intel Iris Plus"
          ports="USB3.1 (x3), USB3.1 Type C (x1, Thunderbolt 3, USB PD), DC-In, Wi-Fi 6, two USB 4 Gen3x2 ports (USB PD, Thunderbolt 4), a single USB 3.2 Gen2x1 port, an HDMI port" wt="1.35 kg (Lightweight Laptop)"
         
         />
         
         
         
         </div>

      
         <div className="product_item">

         <h2 className="product_header">#2 ASUS TUF Gaming A15 </h2>
         <Product link="https://amzn.to/3dOwg6M" imglink={data.asustuf.childImageSharp.fluid} os="Windows 10 Home 64 Bit" proc="Ryzen 7 4800H (8 cores)" ram=" 8GB DDR 4/16GB RAM/ 1TB NVMe SSD" display="15.6-inch (16:9) LED-backlit FHD (1920x1080) 144Hz Refresh Rate, Anti-Glare IPS-level Panel with 45% NTSC and Adaptive Sync Technology "
         gcard="Dedicated NVIDIA GeForce GTX 1660 Ti GDDR6 6GB VRAM" 
         ports="1 x 3.5mm COMBO audio jack | 1x Type-A USB2.0 | 2x Type-A USB 3.2 (Gen 1) | 1x Type-C USB 3.2 (Gen 2) with display support DP1.4 | 1x RJ45 LAN jack for LAN insert | 1x HDMI support 2.0b"
          wt="2.30 Kg  "
         
         />

        

       </div>


         <div className="product_item">

         <h2 className="product_header">#3 Acer Predator Triton 300 PT315-51</h2>
         <Product link="https://amzn.to/2NLS7ky" imglink={data.acertriton.childImageSharp.fluid} os="Windows 10 Home 64 Bit" proc="2.60 GhzGHz Intel Core i7 9750H 9th Gen processor" ram=" 16GB DDR 4 / 1TB HDD +256 GB SSD" 
         display="15.6-inch (16:9) LED-backlit FHD (1920x1080) 144Hz Refresh Rate, Anti-Glare IPS-level Panel with 72% NTSC and 3 ms response time "
         gcard="Dedicated NVIDIA GeForce GTX 1650 Ti GDDR6 4GB " 
         ports="1 x 3.5mm COMBO audio jack | 1x Type-A USB2.0 | 2x Type-A USB 3.2 (Gen 1) | 1x Type-C USB 3.2 (Gen 2) with display support DP1.4 | 1x RJ45 LAN jack for LAN insert | 1x HDMI support 2.0b"
          wt="2.30 Kg "
         
         />
         
         
         
         </div>


         <div className="product_item">

         <h2 className="product_header">#4 Dell G3 3500 </h2>
         <Product link="https://amzn.to/3kqiyZ0" imglink={data.dell.childImageSharp.fluid} os="Windows 10 Home 64 Bit" proc="Intel Core i7-10750H (12MB Cache, up to 5.0 GHz, 6 cores)" ram=" 8GB DDR4,Dual Channel 2933MHz / 512 GB M.2 PCIe NVMe Solid State Drive" 
         display="15.6 inch FHD (1920 x 1080) 120Hz 250 nits WVA Anti- Glare LED Backlit Narrow Border Display "
         gcard="NVIDIA GeForce GTX 1650 4GB GDDR6 " 
         ports="1xUSB 3.2 Gen 1 | 2x USB 2.0 ports | 1x HDMI 2.0 port | 1x SD-card slot | 1x RJ45 port | 1x headset port"
          wt="2.30 Kg "
         
         />
         
         
         
         </div>


         <div className="product_item">

         <h2 className="product_header">#5 Lenovo Legion 5i </h2>
         <Product link="https://amzn.to/2NA55lH" imglink={data.legion.childImageSharp.fluid} os="Windows 10 Home 64 Bit" proc="10th Gen Intel Core i5 (i5-10300H) 4 Cores" ram=" 8GB RAM DDR4-2933, Upgradable up to 16GB | 1TB HDD + 256GB SSD" 
         display="15.6 Full HD (1920x1080) | Wide Viewing Angle | Anti-Glare | IPS Technology | 120 Hz Refresh Rate "
         gcard="NVIDIA GeForce GTX 1650Ti 4GB GDDR6 Dedicated Graphics" 
         ports="4 USB 3.2 Gen 1, 1 USB 3.2 Type-C Gen 1, Headphone/Mic combo jack, HDMI 2.0, Ethernet (RJ-45)"
          wt="2.30 Kg "
         
         />
         
         
         
         </div>

         
         <div className="product_item">

         <h2 className="product_header">#6 Lenovo ThinkPad X390 </h2>
         <Product link="https://amzn.to/3rbxOfb" imglink={data.thinkpad.childImageSharp.fluid} os="Windows 10 Professional 64 " proc="10th Gen Intel Core i7-8665U vPro processor, 1.9Ghz base speed, 4.8Ghz max speed" ram=" 8GB RAM DDR4-2933, Upgradable up to 16GB | 1TB HDD + 256GB SSD" 
         display=" 13.3-inch screen (1920x1080) Full HD IPS 300 Nits | AntiGlare | 720p HD Camera with Thinkshutter  "
         gcard="Intel UHD Integrated Graphics" 
         ports="1 USB 3.1 Gen 1 (one Always On)Thunderbolt 3 (with PD & DP) MicroSD Reader"
          wt="1.29 Kg "
         
         />
         
         
         
         </div>

         <div className="product_item">

         <h2 className="product_header">#7 Apple MacBook Air  </h2>
         <Product link="https://amzn.to/2ZQDOh8" imglink={data.macbook.childImageSharp.fluid} os="IOS " 
         proc=" 1.1GHz dual-core 10th-generation Intel Core i3 processor with Turbo Boost up to 3.2GHz 
         or 1.1GHz quad-core 10th-generation Intel Core i5 processor " ram=" 8GB RAM, 256GB SSD" 
         display=" 13.3-inch (diagonal) LED-backlit Retina display "
         gcard="Intel Iris Plus Graphics" 
         ports="Two Thunderbolt 3 (USB-C) ports"
          wt="1.29 Kg "
         
         />
         
         
         
         </div>

         <div className="product_item">

         <h2 className="product_header">#8  HP 14 (Value For Money)  </h2>
         <Product link="https://amzn.to/3aYts5q" imglink={data.hp.childImageSharp.fluid}os="Pre-loaded Windows 10 Home " proc=" 10th Gen Intel Core i5-1035G1 Processor (1.1 GHz base frequency, up to 3.7 GHz with Intel Turbo Boost Technology, 6 MB cache, 4 cores)" ram=" 8GB RAM /256GB SSD + 1TB HDD" 
         display=" 15.6-inch Full HD (1920 x 1080) Brightview Micro-Edge WLED Display, 250 nits "
         gcard="Intel UHD Integrated Graphics" 
         ports="1 USB 3.1 Type-C, 2 USB 3.0 Type-A, 1 HDMI | Without CD-drive + Built in 4G"
          wt="1.5 Kg "
         
         />
         
         
         
         </div>

         <div className="product_item">

         <h2 className="product_header">#9 ASUS VivoBook 14  </h2>
         <Product link="https://amzn.to/2Mu9SV9"imglink={data.vivobook.childImageSharp.fluid} os="Pre-loaded Windows 10 Home " proc=" AMD Ryzen 5 3500U" ram=" 8GB (2x 4GB) DDR4 2400MHz Dual Channel RAM / 512 SSD" 
         display="  14-inch LED-Backlit, FHD (1920 x 1080) 16:9, 220nits, NanoEdge bezel, Anti-Glare Plane with 45% NTSC, 82% Screen-To-Body Ratio "
         gcard="Integrated AMD Radeon Vega 8 Graphics" 
         ports="1 x COMBO audio jack, 1 x Type-C USB 3.2 (Gen 1), 1 x Type-A USB 3.2 (Gen 1), 2 x Type-A USB2.0, 1 x HDMI 1.4, 1 x micro SD card"
          wt="1.6 Kg "
         
         />
         
         
         
         </div>

         <div className="product_item">

         <h2 className="product_header">#10 Dell Inspiron 5408  </h2>
         <Product link="https://amzn.to/3qYfTZh" imglink={data.inspiron.childImageSharp.fluid} os="Pre-loaded Windows 10 Home " proc=" 10th Generation Intel Core i5-1035G1 Processor (6MB Cache, up to 3.6 GHz,4 cores)" ram=" 8GB RAM Single Channel DDR4 3200 MHz | 512GB M.2 PCIe NVMe Solid State Drive" 
         display=" 14-inch FHD (1920 x 1080) IPS Anti-Glare Narrow Border 300nits 72% NTSC WVA Display"
         gcard="NVIDIA GeForce MX330 Graphics with 2GB GDDR5 vRAM" 
         ports="HDMI 1.4 Port | 2x USB 3.2 Gen 1 Type-C | Micro SD card reader | 1xHeadphone & Microphone Audio Jack"
          wt="1.4 Kg (Lightweight Laptop) "
         
         />
         
         
         
         </div>
         
         
         
         
         
         
         
         </div>
         
       
            
        </div>

       
    )
}

export default ProductDesc


